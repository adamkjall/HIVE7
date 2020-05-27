import React from 'react';
import { useHistory } from 'react-router-dom';

import cross from '../../assets/icons/cross.svg';
import backbutton from '../../assets/icons/back.svg';
import { StyledBack } from './style';

const BackButton = showcross => {
  let history = useHistory();
  return (
    <StyledBack>
      <button className="back" onClick={() => history.goBack()}>
        {showcross ? <img src={cross} alt="back" /> : <img src={backbutton} alt="back" />}
      </button>
    </StyledBack>
  );
};

export default BackButton;
