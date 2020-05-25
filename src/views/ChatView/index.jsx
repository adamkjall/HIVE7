import React, { useState, useEffect, useContext, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import format from 'date-fns/format';

import getDateTimeString from '../../helpers/functions/getDateTimeString';
import { firestore } from '../../firebase/firebase.utils';
import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import avatar from '../../assets/icons/profilepic.svg';
import back from '../../assets/icons/back.svg';
import waves from '../../assets/icons/graywaves.svg';
import sendMessageIcon from '../../assets/icons/sendmess.svg';

import {
  StyledChatview,
  StyledMessage,
  StyledHeader,
  StyledMessageList,
  StyledFirstPresentation
} from './style';

const ChatPageContent = ({
  messages,
  sendMessage,
  user,
  userToChatWith,
  walkDateTime,
  prevPath
}) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = e => {
    if (e.key === 'Enter') submitMessage();
  };

  const scrollToBottom = () => {
    if (messagesEndRef) {
      messagesEndRef.current.scrollIntoView({ behaviour: 'smooth' });
    }
  };

  const submitMessage = () => {
    if (input.length > 0) {
      sendMessage(input);
      setInput('');
    } else return;
  };

  const handleGoBack = () => {
    if (prevPath) {
      history.push('/feed');
    } else {
      history.goBack();
    }
  };

  return (
    <React.Fragment>
      <StyledChatview>
        <StyledHeader>
          <div className="head-chat-info">
            <span className="backbutton">
              <img onClick={handleGoBack} src={back} alt="back" />
            </span>
            <img className="avatar" src={userToChatWith.photoUrl || avatar} alt="avatar" />
            <p className="displayname">{userToChatWith.displayName.split(' ')[0]}</p>
          </div>
          <img src={waves} alt="waves" className="waves" />
        </StyledHeader>
        <StyledMessageList>
          <div className="messages-container">
            {messages && messages.length ? (
              messages
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((message, index) => {
                  const isUserMessage = user.id === message.id;
                  return (
                    <StyledMessage className="message" isUserMessage={isUserMessage} key={index}>
                      <div className="timebox">
                        <p className="timeposted">{format(message.createdAt, 'H:m d MMMM')}</p>
                      </div>
                      <div className="chat-box">
                        <span className="text">{message.text}</span>
                      </div>
                    </StyledMessage>
                  );
                })
            ) : walkDateTime && walkDateTime.length > 1 ? (
              <StyledFirstPresentation>
                <img className="avatar" src={userToChatWith.photoUrl || avatar} alt="avatar" />
                <p>
                  Bokad promenad tillsammans <br /> {getDateTimeString(...walkDateTime.split('T'))}
                </p>
              </StyledFirstPresentation>
            ) : null}
            <div className="anchor" style={{ float: 'left', clear: 'both' }} ref={messagesEndRef} />
          </div>
        </StyledMessageList>

        <div className="sendbox-wrapper">
          <div className="sendbox">
            <input
              className="input-mess"
              type="text"
              id="mess"
              name="mess"
              value={input}
              onChange={event => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" onClick={submitMessage}>
              <img src={sendMessageIcon} alt="send" />
            </button>
          </div>
        </div>
      </StyledChatview>
    </React.Fragment>
  );
};

const ChatView = () => {
  const { user } = useContext(AuthenticationContext);
  const [messages, setMessages] = useState([]);
  const { userToChatWith, walkDateTime, prevPath } = useLocation().state;

  useEffect(() => {
    // find chat session id
    const chatSessionId = calcChatSessionId(user.id, userToChatWith.id);
    const unsubscribe = firestore
      .collection('chat')
      .doc(chatSessionId)
      .collection(chatSessionId)
      .onSnapshot(snapshot => {
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
              if (data && data.lastMessage.userToNotify === user.id) {
                // ... mark conversation as read
                firestore
                  .collection('chat')
                  .doc(chatSessionId)
                  .update({ 'lastMessage.userToNotify': null });
              }
            });
        }
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
        walkDateTime={walkDateTime}
        prevPath={prevPath}
        messages={messages}
        sendMessage={sendMessage}
      />
    </Page>
  );
};

export default ChatView;
