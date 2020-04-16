import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import calculateAge from '../../../helpers/functions/calculateAge.jsx';

import location from '../../../assets/icons/location.svg';
import avatar from '../../../assets/icons/profilepic.svg';
import walking from '../../../assets/icons/walking.svg';
import clock from '../../../assets/icons/time.svg';

import { StyledWalkCard } from './style';

const WalkCard = ({ walk }) => {
  return (
    <StyledWalkCard>
      <Link to={{ pathname: '/selected/' + walk.walkId }}>
        <div className="author-data">
          <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
          <h3 className="author">{walk.user.displayName}</h3>
          <span className="usersage"> {calculateAge(walk.user.dateOfBirth)} år</span>
        </div>
        <div className="walk-data">
          <div className="date">
            <img src={clock} alt="time" />
            <span>
              {walk.date} {walk.time}
            </span>
          </div>
          <div className="duration">
            <img src={walking} alt="walk" />
            <span>{walk.timeduration} timmar</span>
          </div>
          <div className="where">
            <img src={location} alt="where" />
            <span>{walk.where}</span>
          </div>
        </div>
      </Link>
    </StyledWalkCard>
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
    introText: PropTypes.string,
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
