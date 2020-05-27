import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import calculateAge from '../../../helpers/functions/calculateAge.jsx';
import getDateTimeString from '../../../helpers/functions/getDateTimeString.jsx';
import { getUserData } from '../../../firebase/firebase.utils';
import { AuthenticationContext } from '../../../contexts/AuthenticationContext';

import H3 from '../H3';

import location from '../../../assets/icons/location.svg';
import avatar from '../../../assets/icons/profilepic.svg';
import walking from '../../../assets/icons/walking.svg';
import clock from '../../../assets/icons/time.svg';
import citat from '../../../assets/icons/quote.svg';

import { StyledWalkCard } from './style';

const WalkCard = ({ walk }) => {
  const [userToWalkWith, setUserToWalkWith] = useState(undefined);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (walk.attendingPeople.length > 0) {
      const otherUserID = walk.attendingPeople[0];
      getUserData(otherUserID).then(userData => {
        if (userData) setUserToWalkWith(userData);
      });
    }
  }, [walk]);

  const formatDateString = () => {
    const dateTimeString = getDateTimeString(walk.date, walk.time);
    const dateStringPrepend = dateTimeString.split(',')[0];

    if (['Idag', 'Imorgon'].includes(dateStringPrepend)) {
      return dateStringPrepend + ', ' + walk.time;
    } else {
      return dateTimeString
        .split(' ')
        .slice(1, 4)
        .join(' ');
    }
  };

  const sidebarContent = !walk.attendingPeople.length ? (
    <>
      <H3 className="author">{walk.user.displayName.split(' ')[0]}</H3>
      <img className="avatar border" src={walk.user.photoUrl || avatar} alt="avatar" />
      <span>{calculateAge(walk.user.dateOfBirth)} år</span>
      <div className="dott" />
      <span className="small-text">{walk.user.lvlOfSwedish}</span>
    </>
  ) : (
    <div className="matched">
      <div className="avatars">
        <img className="avatar small border" src={walk.user.photoUrl || avatar} alt="avatar" />
        <img
          className="avatar small"
          src={(userToWalkWith && userToWalkWith.photoUrl) || avatar}
          alt="avatar"
        />
      </div>
      <span className="title">
        {user === walk.user ? (
          <>
            {' '}
            Du & <br /> {userToWalkWith && userToWalkWith.displayName.split(' ')[0]}
          </>
        ) : (
          <>
            {' '}
            Du & <br /> {walk.user && walk.user.displayName.split(' ')[0]}{' '}
          </>
        )}
      </span>
      <span className="small-text">ska GÅ tillsammans!</span>
    </div>
  );

  return (
    <Link
      to={{ pathname: '/selected/' + walk.walkId }}
      className="walk-card"
      style={{ maxWidth: '520px', width: '100%' }}
    >
      <StyledWalkCard>
        <div className="sidebar">{sidebarContent}</div>
        <div className="walk-data">
          <img src={clock} alt="time" />
          <span>{formatDateString()}</span>
          <img src={walking} alt="walk" />
          <span>{walk.timeduration}</span>
          <img src={location} alt="where" />
          <span>{walk.where.split(',')[0]}</span>
          <img src={citat} alt="where" className="quote" />
          <span className="italic">
            {walk.introtext.length > 40 ? walk.introtext.slice(0, 40) + '...' : walk.introtext}
          </span>
        </div>
      </StyledWalkCard>
    </Link>
  );
};

WalkCard.propTypes = {
  walk: PropTypes.shape({
    allowChildren: PropTypes.boolean,
    allowPets: PropTypes.boolean,
    bringPets: PropTypes.boolean,
    createdAt: PropTypes.instanceOf(Date),
    date: PropTypes.string,
    filterGender: PropTypes.boolean,
    introtext: PropTypes.string,
    walkId: PropTypes.string,
    timeduration: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.shape({
      dateOfBirth: PropTypes.string,
      displayName: PropTypes.string,
      email: PropTypes.string,
      lvlOfSwedish: PropTypes.string
    }),
    where: PropTypes.string
  })
};

export default WalkCard;
