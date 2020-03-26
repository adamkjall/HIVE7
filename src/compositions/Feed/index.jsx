import React from 'react';
import { Link } from 'react-router-dom';

import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import colors from 'tokens/colors.mjs';

import { StyledFeed, StyledPostList, StyledPost } from './style';

const Feed = ({ walks }) => {
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
                <Link to={{ pathname: '/selected' + walk.postId, state: { walk } }}>
                  <div className="box1">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <h3 className="author">{walk.author}</h3>
                    <span className="usersage">28 år{/*  {walk.authorage} */}</span>
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

export default Feed;
