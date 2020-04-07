import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../../components/UI/WalkCard';
import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { StyledBooked, StyledPostList, StyledPost } from './style';

const Booked = ({ walks }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <StyledBooked>
      <StyledPostList>
        {walks && user && walks.length !== 0 ? (
          walks
            .sort((walkA, walkB) => {
              return walkA.createdAt - walkB.createdAt;
            })
            .filter(walk => {
              const isAttending = walk.attendingPeople.find(id => id === user.id);
              const isUser = walk.user.id === user.id;
              return isAttending || isUser;
            })
            .map((walk, index) => {
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
