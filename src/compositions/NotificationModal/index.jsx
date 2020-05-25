import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getUserData, getWalk } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Loader from 'react-loader-spinner';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';

import avatar from '../../assets/icons/profilepic.svg';
import waves from '../../assets/icons/lines.svg';
import cross from '../../assets/icons/cross.svg';
import buttonMessage from '../../assets/icons/button-message.svg';

import {
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledImageContainer,
  StyledCancelModal
} from './style';

const NotificationModal = ({ notification, removeNotification }) => {
  const [userData, setUserData] = useState(null);
  const [walk, setWalk] = useState(null);
  const [loading, setLoading] = useState(true);
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
      .then(() => setLoading(false))
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

  if (notification.type === 'left walk') {
    return (
      <StyledCancelModal>
        <div className="whitebox">
          {loading ? (
            <Loader
              className="loader"
              type="Oval"
              color="rgba(242, 112, 99, 1)"
              height={80}
              width={80}
            />
          ) : (
            <>
              <p className="superbold">Promenad avbokad</p>
              <p>{`Din promenad med ${userData.displayName} har tyvärr blivit avbokad.`}</p>
              <Button
                className="warning"
                onClick={() => removeNotification(notification.notificationId)}
              >
                Stäng
              </Button>
            </>
          )}
        </div>
      </StyledCancelModal>
    );
  }

  return (
    <StyledModal>
      <StyledModalHeader onClick={() => removeNotification(notification.notificationId)}>
        <img className="close" src={cross} alt="close window" />
      </StyledModalHeader>
      {!userData || !walk || !user ? (
        <Loader
          className="loader"
          type="Oval"
          color="rgba(242, 112, 99, 1)"
          height={80}
          width={80}
        />
      ) : (
        <>
          <StyledModalContent>
            <div className="content-container">
              <H1 className="title" center>
                GÅ MAMAS!
              </H1>
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
          {notification.type !== 'left walk' && (
            <Link
              className="hello-btn"
              to={{
                pathname: '/chat',
                state: {
                  userToChatWith: userData,
                  walkDateTime: walk.date + 'T' + walk.time,
                  prevPath: location.pathname
                }
              }}
              onClick={() => removeNotification(notification.notificationId)}
            >
              <Button>
                <img className="icon" src={buttonMessage} />
                <span>SÄG HEJ</span>
              </Button>
            </Link>
          )}
        </>
      )}
    </StyledModal>
  );
};

export default NotificationModal;
