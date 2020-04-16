import React, { useState, useEffect, useContext } from 'react';

import { getUserData, getWalk } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Dialog from 'components/UI/Dialog';
import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import waves from '../../assets/icons/waves.png';
import cross from '../../assets/icons/cross.png';

import {
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledImageContainer,
  StyledTimeAndPlace
} from './style';

const NotificationModal = ({ notification, removeNotification }) => {
  const [userData, setUserData] = useState(null);
  const [walkData, setWalkData] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  useEffect(() => {
    if (!notification) return;

    getUserData(notification.userId).then(data => setUserData(data));
    getWalk(notification.walkId).then(data => setWalkData(data));
  }, [notification]);
  console.log('walkData', walkData);

  return (
    <StyledModal>
      <StyledModalHeader onClick={() => removeNotification(notification.notificationId)}>
        <img className="close" src={cross} alt="close window" />
      </StyledModalHeader>
      {!userData || !walkData ? (
        <h1>Loading</h1>
      ) : (
        <StyledModalContent>
          {notification.type === 'left walk' ? (
            <h1 className="title">{`${userData.displayName} har gett återbud på din promenad.`}</h1>
          ) : (
            <h1 className="title">Full fart FRAMÅT!</h1>
          )}
          <p className="notification-text">{`Du och ${
            userData.displayName.split(' ')[0]
          } ska gå på promenad tillsammans.`}</p>
          <StyledImageContainer>
            <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
            <span className="dot"></span>
            <img className="avatar" src={userData.photoUrl || avatar} alt="avatar" />
          </StyledImageContainer>
          <img className="waves" src={waves} alt="" />
          <StyledTimeAndPlace>
            <img className="icon" src={clock} alt="clock" />
            <span>{`${walkData.date}, kl ${walkData.time}`}</span>
            <div className="divider"></div>
            <img className="icon" src={location} alt="location" />
            <span>{walkData.where}</span>
          </StyledTimeAndPlace>
        </StyledModalContent>
      )}
    </StyledModal>
  );
};

export default NotificationModal;
