import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import avatar from '../../assets/icons/profilepic.svg';

import { StyledChatview } from './style';

const ChatPageContent = ({ error, isLoading, messages, sendMessage, userToChatWith }) => {
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
          <div className="heigth-countainer">
            <div className="to-this-user">
              <img className="avatar" src={userToChatWith.photoUrl || avatar} alt="avatar" />
              {userToChatWith.displayName}
            </div>

            {messages &&
              messages.map((message, index) => (
                <div className="chattcountainer" key={index}>
                  <p className="timeposted">{Date(message.createdAt)}</p>
                  <div className="chattbox">
                    <p className="author">{message.name}</p>
                    <p className="mess">{message.text}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="sendbox">
            <Input
              className="inputmess"
              type="text"
              id="mess"
              inline
              name="mess"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <Button type="submit" onClick={submitMessage}>
              Send
            </Button>
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
    const chatSessionId = user.id + '-' + userToChatWith.id;
    const unsubscribe = firestore
      .collection('chat')
      .doc(chatSessionId)
      .collection(chatSessionId)
      .onSnapshot(snapshot => {
        setIsLoading(true);
        const fetchedMessages = [];
        snapshot.forEach(doc => {
          const message = doc.data();
          fetchedMessages.push(message);
        });
        setMessages(fetchedMessages);
        console.log('fetchedMessages', fetchedMessages);

        setIsLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const sendMessage = message => {
    const chatSessionId = user.id + '-' + userToChatWith.id;
    firestore
      .collection('chat')
      .doc(chatSessionId)
      .collection(chatSessionId)
      .add({ name: user.displayName, text: message, createdAt: new Date() });
  };

  return (
    <Page>
      <ChatPageContent
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
