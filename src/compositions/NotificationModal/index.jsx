import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getUserData, getWalk } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';

import avatar from '../../assets/icons/profilepic.svg';
import waves from '../../assets/icons/lines.svg';
import cross from '../../assets/icons/cross.svg';
import buttonMessage from '../../assets/icons/button-message.svg';

import { StyledModal, StyledModalHeader, StyledModalContent, StyledImageContainer } from './style';

const NotificationModal = ({ notification, removeNotification }) => {
  const [userData, setUserData] = useState(null);
  const [walk, setWalk] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  useEffect(() => {
    if (!notification) return;

    const hasError = false;

    getUserData(notification.userId)
      .then(data => setUserData(data))
      .catch(err => {
        hasError = true;
      });
    getWalk(notification.walkId)
      .then(data => setWalk(data))
      .then(() => {
        if (hasError) removeNotification(notification.notificationId);
      })
      .catch(err => {
        removeNotification(notification.notificationId);
      });
  }, [notification]);

  return (
    <StyledModal>
      <StyledModalHeader onClick={() => removeNotification(notification.notificationId)}>
        <img className="close" src={cross} alt="close window" />
      </StyledModalHeader>
      {!userData || !walk || !user ? (
        <H1 center>Loading</H1>
      ) : (
        <>
          <StyledModalContent>
            <div className="content-container">
              {notification.type === 'left walk' ? (
                <H1
                  className="title"
                  center
                >{`${userData.displayName} har gett återbud på din promenad.`}</H1>
              ) : (
                <H1 className="title" center>
                  GÅ MAMAS!
                </H1>
              )}
              <p className="notification-text">{`Du och ${
                userData.displayName ? userData.displayName.split(' ')[0] : ''
              } ska gå på promenad tillsammans.`}</p>
              <img src={waves} alt="waves" />
              <StyledImageContainer>
                <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
                <span className="dot"></span>
                <img className="avatar" src={userData.photoUrl || avatar} alt="avatar" />
              </StyledImageContainer>
            </div>
          </StyledModalContent>
          <Link
            className="hello-btn"
            to={{
              pathname: '/chat',
              state: {
                userToChatWith: walk.user,
                walkDateTime: walk.date + 'T' + walk.time
              }
            }}
            onClick={() => removeNotification(notification.notificationId)}
          >
            <Button>
              <img className="icon" src={buttonMessage} />
              <span>SÄG HEJ</span>
            </Button>
          </Link>
        </>
      )}
    </StyledModal>
  );
};

export default NotificationModal;
