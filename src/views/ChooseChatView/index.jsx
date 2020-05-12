import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { firestore, getUserData } from '../../firebase/firebase.utils';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';

import waves from '../../assets/icons/graywaves.svg';
import avatar from '../../assets/icons/profilepic.svg';
import searchicon from '../../assets/icons/search.svg';

import { StyledcChooseChatview } from './style';

const ChooseChatPageContent = ({ user, error, isLoading, conversations }) => {
  const [input, setInput] = useState('');

  const filterConversations = conversations => {
    return conversations.filter(conversation =>
      conversation.userToChatWith.displayName.toLowerCase().includes(input.trim().toLowerCase())
    );
  };

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledcChooseChatview>
          <div className="message-head-container">
            <H1>Meddelanden</H1>
            <img src={waves} alt="wave" className="waves" />
          </div>
          <div className="search-div">
            <img src={searchicon} alt="sök" />
            <input
              type="text"
              id="mess"
              placeholder="Sök"
              prop={searchicon}
              name="mess"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </div>
          <div className="list-mess">
            {filterConversations(conversations).map(conversation => {
              const isMessageViewed = conversation.lastMessage.userToNotify !== user.id;
              return (
                <Link
                  key={conversation.userToChatWith.id}
                  to={{ pathname: '/chat', state: { userToChatWith: conversation.userToChatWith } }}
                >
                  <div className="comp-mess">
                    <img
                      className={`avatar ${isMessageViewed ? '' : 'border'}`}
                      src={conversation.userToChatWith.photoUrl || avatar}
                      alt="avatar"
                    />
                    <span className={`name  ${isMessageViewed ? '' : 'bold'}`}>
                      {conversation.userToChatWith.displayName}
                    </span>
                    <span className={`date ${isMessageViewed ? '' : 'bold'}`}>
                      {conversation.lastMessage.date}
                    </span>
                    <span className={`mess ${isMessageViewed ? '' : 'bold'}`}>
                      {conversation.lastMessage.message.length < 28
                        ? conversation.lastMessage.message
                        : conversation.lastMessage.message.slice(0, 28) + '...'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </StyledcChooseChatview>
      </React.Fragment>
    );
  }
};

const ChooseChatView = () => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = firestore
      .collection('chat')
      // filter out our conversations
      .where('ids', 'array-contains-any', [user.id])
      .onSnapshot(snapshot => {
        const conversationsData = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const ids = data.ids;
          // find the id of the user we have a conversation with
          const id = ids[0] !== user.id ? ids[0] : ids[1];

          conversationsData.push({ toUserId: id, lastMessage: data.lastMessage }); // .. and store it in an array
        });

        // fetch all users we have a conversation with
        // .. and map the conversation data with the user
        Promise.all(
          conversationsData.map(conversationData =>
            getUserData(conversationData.toUserId).then(user => ({
              userToChatWith: { ...user, id: conversationData.toUserId },
              ...conversationData
            }))
          )
        )
          .then(data => {
            setConversations(data);
          })
          .catch(error => console.log('Error', error.message));
      });

    return () => unsubscribe();
  }, [user]);

  return (
    <Page metadata={{ title: 'Chat' }} displayNavBottom>
      <ChooseChatPageContent
        user={user}
        conversations={conversations}
        error={error}
        isLoading={isLoading}
      />
    </Page>
  );
};

export default ChooseChatView;
