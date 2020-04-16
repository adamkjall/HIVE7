import React from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../../components/UI/WalkCard';
import { StyledFeed, StyledPost, StyledPostList } from './style';

const Feed = ({ walks }) => (
  <StyledFeed>
    <StyledPostList>
      {walks &&
        walks.map((walk, index) => {
          return (
            <StyledPost key={index}>
              <WalkCard walk={walk} />
            </StyledPost>
          );
        })}
    </StyledPostList>
  </StyledFeed>
);

Feed.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
};

export default Feed;
