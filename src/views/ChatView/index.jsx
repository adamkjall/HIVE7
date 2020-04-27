import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

import { StyledChatview } from './style';

const ChatPageContent = ({ error, isLoading, messages, sendMessage }) => {
  const [input, setInput] = useState('');

  const submitMessage = () => {
    sendMessage(input);
    setInput('');
  };

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledChatview>
          <H3>Chat</H3>
          <Input
            type="text"
            id="mess"
            name="mess"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <Button onClick={submitMessage}>Send</Button>
          {messages &&
            messages.map((message, index) => (
              <div className="chattbox" key={index}>
                <p className="timeposted">{Date(message.createdAt)}</p>
                <p className="author">{message.name}</p>
                <p className="mess">{message.text}</p>
              </div>
            ))}
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
        error={error}
        isLoading={isLoading}
        messages={messages}
        sendMessage={sendMessage}
      />
    </Page>
  );
};

export default ChatView;
