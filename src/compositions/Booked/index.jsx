import React, { useContext } from 'react';

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

export default Booked;
