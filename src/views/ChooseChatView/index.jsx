import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { firestore, getUserData } from '../../firebase/firebase.utils';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';

import NavBottom from 'components/NavBottom';

import waves from '../../assets/icons/waves.svg';
import avatar from '../../assets/icons/profilepic.svg';

import { StyledcChooseChatview } from './style';

const ChooseChatPageContent = ({ error, isLoading, users }) => {
  const [input, setInput] = useState('');

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledcChooseChatview>
          <NavBottom />
          <div className="message-head-container">
            <H1>Meddelanden</H1>
            <img src={waves} alt="wave" className="waves" />
          </div>
          <div className="search">
            <Input
              type="text"
              id="mess"
              placeholder="Sök"
              inline
              name="mess"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </div>
          <div className="list-mess">
            {users.map(user => (
              <Link key={user.id} to={{ pathname: '/chat', state: { userToChatWith: user } }}>
                <div className="comp-mess">
                  <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
                  <span className="name">{user.displayName}</span>
                  <span className="date">Date</span>
                  <span className="mess">Message</span>
                </div>
              </Link>
            ))}
          </div>
        </StyledcChooseChatview>
      </React.Fragment>
    );
  }
};

const ChooseChatView = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('chat')
      .where('ids', 'array-contains-any', [user.id])
      .onSnapshot(snapshot => {
        const userIds = [];
        snapshot.forEach(doc => {
          const ids = doc.data().ids;
          const id = ids[0] !== user.id ? ids[0] : ids[1];
          userIds.push(id);
          console.log('ids', userIds);
        });

        // fetch all users from firestore with the userIds array
        Promise.all(
          userIds.map(id => {
            getUserData(id).then(user => {
              setUsers(prevUsers => [...prevUsers, { ...user, id }]);
            });
          })
        );
      });

    return () => unsubscribe();
  }, []);

  // console.log("user", users);

  return (
    <Page>
      <ChooseChatPageContent users={users} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default ChooseChatView;
