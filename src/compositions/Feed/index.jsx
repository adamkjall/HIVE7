import React from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../../components/UI/WalkCard';
import H1 from '../../components/UI/H1';

import shortWaves from '../../assets/icons/short-waves.svg';

import { StyledFeed, StyledGreetingsBox } from './style';

const Feed = ({ walks }) => (
  <StyledFeed>
    <StyledGreetingsBox>
      <H1 className="title">Välkommen till GÅ MAMA!</H1>
      <p className="text">Här kan du se tillgängliga promenader att hänga med på.</p>
      <img className="waves" src={shortWaves} />
    </StyledGreetingsBox>
    {walks &&
      walks.map((walk, index) => {
        return <WalkCard key={index} walk={walk} />;
      })}
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
