import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import colors from 'tokens/colors.mjs';

import { StyledFeed, StyledPost, StyledPostList } from './style';

const Feed = ({ walks }) => {
  const { user } = useContext(AuthenticationContext);

  const birthDateToAgeString = birthDateString => {
    if (birthDateString) {
      const year = birthDateString.slice(0, 4);
      const month = birthDateString.slice(4, 6);
      const day = birthDateString.slice(6, 8);

      const thisDate = new Date().toLocaleDateString();
      const [thisYear, thisMonth, thisDay] = thisDate.split('-');

      let age = +thisYear - +year;
      const monthDiff = +thisMonth - +month;
      const dayDiff = +thisDay - +day;

      if (monthDiff < 0) age--;
      else if (monthDiff === 0 && dayDiff < 0) age--;

      return age + ' år';
    }
    return '';
  };

  return (
    <StyledFeed>
      <StyledPostList>
        {walks &&
          user &&
          walks
            .sort((walkA, walkB) => {
              return walkA.createdAt - walkB.createdAt;
            })
            .filter(walk => {
              return walk.user.id !== user.id;
            })
            .map((walk, index) => {
              const timeArr = walk.createdAt.toLocaleTimeString().split(':');
              const time = `${timeArr[0]}:${timeArr[1]}`;
              return (
                <StyledPost key={index}>
                  <Link to={{ pathname: '/selected/' + walk.walkId, state: { walk } }}>
                    <div className="box1">
                      <img className="avatar" src={avatar} alt="avatar" />
                      <h3 className="author">{walk.user.displayName}</h3>
                      <span className="usersage">
                        {' '}
                        {birthDateToAgeString(walk.user.dateOfBirth)}
                      </span>
                    </div>
                    <hr />
                    <div className="box2">
                      <div className="date">
                        <img src={clock} alt="time" />
                        <span>
                          {walk.date} {walk.time}
                        </span>
                      </div>
                      <div className="timeduration">
                        <img src={walking} alt="walk" />
                        <span>{walk.timeduration}</span>
                      </div>
                      <div className="where">
                        <img src={location} alt="where" />
                        <span>{walk.where}</span>
                      </div>
                    </div>
                    <hr />
                    <span className="posted">
                      Posted at: {`${time}  ${walk.createdAt.toLocaleDateString()}`}
                    </span>{' '}
                  </Link>
                </StyledPost>
              );
            })}
      </StyledPostList>
    </StyledFeed>
  );
};

Feed.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      allowChildren: PropTypes.string,
      allowPets: PropTypes.string,
      bringPets: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date),
      date: PropTypes.string,
      filterGender: PropTypes.string,
      introText: PropTypes.string,
      walkId: PropTypes.string,
      time: PropTypes.string,
      user: PropTypes.shape({
        dateOfBirth: PropTypes.string,
        displayName: PropTypes.string,
        email: PropTypes.string,
        lvlOfSwedish: PropTypes.string
      }),
      where: PropTypes.string
    })
  )
};

export default Feed;
