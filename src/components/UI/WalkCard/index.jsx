import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import calculateAge from '../../../helpers/functions/calculateAge.jsx';
import getDateTimeString from '../../../helpers/functions/getDateTimeString.jsx';
import H1 from '../H1';

import location from '../../../assets/icons/location.svg';
import avatar from '../../../assets/icons/profilepic.svg';
import walking from '../../../assets/icons/walking.svg';
import clock from '../../../assets/icons/time.svg';
import citat from '../../../assets/icons/quote.svg';

import { StyledWalkCard } from './style';

const WalkCard = ({ walk }) => {
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

  return (
    <Link to={{ pathname: '/selected/' + walk.walkId }}>
      <StyledWalkCard>
        <div className="author-data">
          <H1 className="author">{walk.user.displayName.split(' ')[0]}</H1>
          <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
          <span>{calculateAge(walk.user.dateOfBirth)} år</span>
          <div className="dott" />
          <span>{walk.user.lvlOfSwedish}</span>
        </div>
        <div className="walk-data">
          <img src={clock} alt="time" />
          <span>{formatDateString()}</span>
          <img src={walking} alt="walk" />
          <span>{walk.timeduration}</span>
          <img src={location} alt="where" />
          <span>{walk.where}</span>
          <img src={citat} alt="where" />
          <span>{walk.introtext}</span>
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
    filterGender: PropTypes.string,
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
