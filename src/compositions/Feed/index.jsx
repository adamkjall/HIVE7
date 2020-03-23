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
                {/* a conditional render that show cancel /delete walk if your the poster, also need confirmation and tell others that walk is canceled*/}
                {user && user.id === post.userId ? (
                  <Button onClick={() => deletePostDocument(post.postId)}>Cancel/Delete</Button>
                ) : /* a conditional render if your the attende that show join (this is for next page) or leave if you selected and confirmed this walk */
                post.attendingPeople.length == 0 ? (
                  <Button onClick={() => joinAWalk(user.id, post.postId)}>JOIN</Button>
                ) : post.attendingPeople.find(id => id === user.id) ? (
                  <Button onClick={() => leaveAWalk(user.id, post.postId)}>LEAVE</Button>
                ) : (
                  <Button onClick={() => joinAWalk(user.id, post.postId)}>JOIN</Button>
                )}
              </StyledPost>
            );
          })}
      </StyledPostList>
    </StyledFeed>
  );
};

export default Feed;
