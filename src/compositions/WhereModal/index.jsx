import React, { useState, useEffect, useContext } from 'react';

import H1 from 'components/UI/H1';
import Input from 'components/UI/Input';

import useAutocomplete from 'hooks/useAutocomplete';

import location from '../../assets/icons/location.svg';
import cross from '../../assets/icons/cross.svg';

import {
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledAutocompleteList
} from './style';

const WhereModal = ({ submitWhere, closeModal }) => {
  const [input, setInput] = useState('');
  const [searchResults, clearResults] = useAutocomplete(input);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <StyledModal>
      <StyledModalHeader
        onClick={() => {
          submitWhere(input);
          closeModal();
        }}
      >
        <H1>I vilket område vill du gå?</H1>
        <img className="close" src={cross} alt="close window" />
      </StyledModalHeader>
      <StyledModalContent>
        <Input
          id="where"
          inline
          name="where"
          value={input.split(',')[0]}
          onChange={event => setInput(event.target.value)}
          autoComplete="off"
          autoFocus
        />
        <div className="results-wrapper">
          <StyledAutocompleteList>
            {searchResults &&
              searchResults.map((res, i) => (
                <li
                  key={i}
                  onClick={() => {
                    clearResults();
                    submitWhere(res.address);
                    closeModal();
                  }}
                >
                  <img src={location} alt="location" />
                  <div className="result">
                    <div>{res.address.split(',')[0]}</div>
                    <div className="gray">
                      {res.address
                        .split(',')
                        .slice(1)
                        .join(',')}
                    </div>
                  </div>
                </li>
              ))}
          </StyledAutocompleteList>
        </div>
      </StyledModalContent>
    </StyledModal>
  );
};

export default WhereModal;
