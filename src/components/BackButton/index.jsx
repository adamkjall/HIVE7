import React from 'react';
import { useHistory } from 'react-router-dom';

import backbutton from '../../assets/icons/back.svg';
import { StyledBack } from './style';

const BackButton = () => {
  let history = useHistory();
  return (
    <StyledBack>
      <button className="back" onClick={() => history.goBack()}>
        <img src={backbutton} alt="back" />
      </button>
    </StyledBack>
  );
};

export default BackButton;
