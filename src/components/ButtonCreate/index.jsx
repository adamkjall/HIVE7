import React from 'react';
import { Link } from 'react-router-dom';

import plus from '../../assets/icons/plus.svg';
import { StyledButtonCreate } from './style';

const ButtonCreate = () => (
  <Link to="/create">
    <StyledButtonCreate>
      <img src={plus} alt="ny promenad" />
    </StyledButtonCreate>
  </Link>
);

export default ButtonCreate;
