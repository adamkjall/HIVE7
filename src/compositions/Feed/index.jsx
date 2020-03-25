import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { deleteWalkDocument, leaveAWalk, joinAWalk } from '../../firebase/firebase.utils';

import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';

import colors from 'tokens/colors.mjs';

import { StyledFeed, StyledPostList, StyledPost } from './style';

const Feed = ({ walks }) => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);

  return (
    <StyledFeed>
      <StyledPostList>
        {walks
          .sort((walkA, walkB) => {
            return walkA.createdAt - walkB.createdAt;
          })
          .map((walk, index) => {
            const timeArr = walk.createdAt.toLocaleTimeString().split(':');
            const time = `${timeArr[0]}:${timeArr[1]}`;
            return (
              <StyledPost key={index}>
                <H3 className="title">{walk.title}</H3>
                <span>{`${time}  ${walk.createdAt.toLocaleDateString()}`}</span>
                <p className="user">{walk.author}</p>
                <p className="post">{walk.text}</p>
                <Link to="/selected">
                  <Button>mer info</Button>
                </Link>
                {/* a conditional render that show cancel walk if your the poster, also need confirmation and tell others that walk is canceled*/}
                {isAuthenticated ? (
                  user.id === walk.userId ? (
                    <Button onClick={() => deleteWalkDocument(walk.postId)}>Cancel</Button>
                  ) : /* a conditional render if your the attende that show join (this is for next page) or leave if you selected and confirmed this walk */
                  !walk.attendingPeople ? (
                    <Button onClick={() => joinAWalk(user.id, walk.postId)}>JOIN</Button>
                  ) : walk.attendingPeople.find(id => id === user.id) ? (
                    <Button onClick={() => leaveAWalk(user.id, walk.postId)}>LEAVE</Button>
                  ) : (
                    <Button onClick={() => joinAWalk(user.id, walk.postId)}>JOIN</Button>
                  )
                ) : null}
              </StyledPost>
            );
          })}
      </StyledPostList>
    </StyledFeed>
  );
};

export default Feed;
