import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';
import Input from 'components/UI/Input';

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
          <div>
            <H3>Meddelanden</H3>
          </div>
          <Input
            type="text"
            id="mess"
            placeholder="Sök"
            inline
            name="mess"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
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
