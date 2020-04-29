import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';

import NavBottom from 'components/NavBottom';

import waves from '../../assets/icons/waves.svg';
import avatar from '../../assets/icons/profilepic.svg';

import { StyledcChooseChatview } from './style';

const ChooseChatPageContent = ({ error, isLoading }) => {
  const [input, setInput] = useState('');

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledcChooseChatview>
          <NavBottom />
          <div className="message-head-container">
            <H1>Meddelanden</H1>
            <img src={waves} alt="wave" className="waves" />
          </div>
          <div className="search">
            <Input
              type="text"
              id="mess"
              placeholder="Sök"
              inline
              name="mess"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </div>
          <div className="list-mess">
            {/* map */}
            <div className="comp-mess">
              <img className="avatar" src={avatar} alt="avatar" />
              <span className="name">Name</span>
              <span className="date">Date</span>
              <span className="mess">Message</span>
            </div>
          </div>
        </StyledcChooseChatview>
      </React.Fragment>
    );
  }
};

const ChooseChatView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <ChooseChatPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default ChooseChatView;
