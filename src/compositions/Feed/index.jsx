import React, { useContext } from 'react';

import WalkCard from '../../components/UI/WalkCard';
import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { StyledFeed, StyledPost, StyledPostList } from './style';

const Feed = ({ walks }) => {
  const { user } = useContext(AuthenticationContext);

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
              return (
                <StyledPost key={index}>
                  <WalkCard walk={walk} />
                </StyledPost>
              );
            })}
      </StyledPostList>
    </StyledFeed>
  );
};

export default Feed;
