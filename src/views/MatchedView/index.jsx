import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

const MatchedPageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H1>Full fart framåt!</H1>
          <H3>Du och Sofia vill gå på prommenad tillsammans.</H3>
          <Link to="/profile">
            <Button>PROFILBILD</Button>
          </Link>
          +
          <Link to="/profile">
            <Button>PROFILBILD</Button>
          </Link>
          <p>När:</p>
          <p>Var:</p>
          <Link to="/chat">
            <Button>Säj Hej</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
};

const MatchedView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <MatchedPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default MatchedView;
