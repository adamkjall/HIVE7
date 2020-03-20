import React, { useContext } from 'react';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { deletePostDocument, leaveAWalk, joinAWalk } from '../../firebase/firebase.utils';

import H1 from 'components/UI/H1';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';

import colors from 'tokens/colors.mjs';

import { StyledFeed, StyledPostList, StyledPost } from './style';

const Feed = ({ posts }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <StyledFeed>
      <H1>Feed</H1>
      <StyledPostList>
        {posts
          .sort((postA, postB) => {
            return postA.createdAt - postB.createdAt;
          })
          .map((post, index) => {
            const timeArr = post.createdAt.toLocaleTimeString().split(':');
            const time = `${timeArr[0]}:${timeArr[1]}`;
            return (
              <StyledPost key={index}>
                <H3 className="title">{post.title}</H3>
                <span>{`${time}  ${post.createdAt.toLocaleDateString()}`}</span>
                <p className="user">{post.author}</p>
                <p className="post">{post.text}</p>
                {user && user.id === post.userId ? (
                  <Button onClick={() => deletePostDocument(post.postId)}>Delete</Button>
                ) : !post.people.find(id => id === user.id) ? (
                  <Button onClick={() => joinAWalk(user.id, post.postId)}>JOIN</Button>
                ) : (
                  <Button onClick={() => leaveAWalk(user.id, post.postId)}>LEAVE</Button>
                )}
                {console.log('post')}
              </StyledPost>
            );
          })}
      </StyledPostList>
    </StyledFeed>
  );
};

export default Feed;
