import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format, formatDistance, compareAsc, parse, toDate } from 'date-fns';

import { firestore } from '../../firebase/firebase.utils';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';
import avatar from '../../assets/icons/profilepic.svg';
import back from '../../assets/icons/back.svg';
import waves from '../../assets/icons/graywaves.svg';
import sendMessageIcon from '../../assets/icons/sendmess.svg';

import { StyledChatview, StyledMessage, StyledHeader, StyledMessageList } from './style';

const ChatPageContent = ({ error, isLoading, messages, sendMessage, user, userToChatWith }) => {
  const [input, setInput] = useState('');

  const submitMessage = () => {
    if (input.length > 0) {
      sendMessage(input);
      setInput('');
    } else return;
  };

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledChatview>
          <StyledHeader>
            <div className="head-chat-info">
              <Link to="/choosechat" className="backbutton">
                <img src={back} alt="back" />
              </Link>
              <img className="avatar" src={userToChatWith.photoUrl || avatar} alt="avatar" />
              {userToChatWith.displayName}
            </div>
            <img src={waves} alt="waves" className="waves" />
          </StyledHeader>
          {messages && (
            <StyledMessageList>
              <div className="messages-container">
                {messages
                  .sort((a, b) => a.createdAt - b.createdAt)
                  .map((message, index) => {
                    const isUserMessage = user.id === message.id;
                    return (
                      <StyledMessage isUserMessage={isUserMessage} key={index}>
                        {/* <p className="timeposted">{format(message.createdAt, 'H:m d MMMM')}</p> */}
                        <div className="chat-box">
                          {/* <p className="author">{message.name}</p> */}
                          <span className="mess">{message.text}</span>
                        </div>
                      </StyledMessage>
                    );
                  })}
              </div>
            </StyledMessageList>
          )}

          <div className="sendbox-wrapper">
            <div className="sendbox">
              <input
                className="input-mess"
                type="text"
                id="mess"
                name="mess"
                value={input}
                onChange={event => setInput(event.target.value)}
              />
              <button type="submit" onClick={submitMessage}>
                <img src={sendMessageIcon} alt="send" />
              </button>
            </div>
          </div>
        </StyledChatview>
      </React.Fragment>
    );
  }
};

const ChatView = () => {
  const { user } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const { userToChatWith } = useLocation().state;

  useEffect(() => {
    // find chat session id
    const chatSessionId = calcChatSessionId(user.id, userToChatWith.id);
    const unsubscribe = firestore
      .collection('chat')
      .doc(chatSessionId)
      .collection(chatSessionId)
      .onSnapshot(snapshot => {
        setIsLoading(true);
        const fetchedMessages = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          fetchedMessages.push({ ...data, createdAt: data.createdAt.toDate() });
        });
        setMessages(fetchedMessages);

        if (fetchedMessages.length !== 0) {
          //  mark conversation as read
          firestore
            .collection('chat')
            .doc(chatSessionId)
            .get()
            .then(res => res.data())
            .then(data => {
              // if user to notify is this user
              if (data.lastMessage.userToNotify === user.id) {
                // ... mark conversation as read
                firestore
                  .collection('chat')
                  .doc(chatSessionId)
                  .update({ 'lastMessage.userToNotify': null });
              }
            });
        }

        setIsLoading(false);
      });

    return () => unsubscribe();
  }, [user, userToChatWith]);

  // return chat session id with format "lowestIdHere-highestIdHere"
  const calcChatSessionId = (id1, id2) => (id1 < id2 ? id1 + '-' + id2 : id2 + '-' + id1);

  const sendMessage = message => {
    const chatSessionId = calcChatSessionId(user.id, userToChatWith.id);
    firestore
      .collection('chat')
      .doc(chatSessionId)
      .set({
        ids: [user.id, userToChatWith.id],
        lastMessage: {
          message,
          date: format(new Date(), 'd MMMM'),
          userToNotify: userToChatWith.id
        }
      });

    firestore
      .collection('chat')
      .doc(chatSessionId)
      .collection(chatSessionId)
      .add({ id: user.id, name: user.displayName, text: message, createdAt: new Date() });
  };

  return (
    <Page>
      <ChatPageContent
        user={user}
        userToChatWith={userToChatWith}
        error={error}
        isLoading={isLoading}
        messages={messages}
        sendMessage={sendMessage}
      />
    </Page>
  );
};

export default ChatView;
