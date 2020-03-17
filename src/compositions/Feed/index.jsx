import React from 'react';

import H1 from 'components/UI/H1';
import H3 from 'components/UI/H3';

import colors from 'tokens/colors.mjs';

import { StyledFeed, StyledPostList, StyledPost } from './style';

const Feed = ({ posts }) => {
  return (
    <StyledFeed>
      <H1>Feed</H1>
      <StyledPostList>
        {posts.map((post, index) => (
          <StyledPost key={index}>
            <H3 className="title">{post.title}</H3>
            <p className="user">{post.displayName}</p>
            <p className="post">{post.text}</p>
          </StyledPost>
        ))}
      </StyledPostList>
    </StyledFeed>
  );
};

export default Feed;
