import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../../components/UI/WalkCard';
import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { StyledBooked, StyledPostList, StyledPost } from './style';

const Booked = ({ walks, show }) => {
  const { user } = useContext(AuthenticationContext);
  console.log('show', show);

  return (
    <StyledBooked>
      <StyledPostList>
        {walks && walks.length !== 0 ? (
          walks.map((walk, index) => {
            return (
              <StyledPost key={index}>
                <WalkCard walk={walk} />
              </StyledPost>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </StyledPostList>
    </StyledBooked>
  );
};

Booked.propTypes = {
  show: PropTypes.bool,
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

export default Booked;
