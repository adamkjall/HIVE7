import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

const LandingPageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div className="column">
          <H3>Vad vill du göra?</H3>
          <Link to="/create">
            <Button>Starta promenad</Button>
          </Link>
          <Link to="/feed">
            <Button>Gå med i promenad</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
};

const LandingView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <LandingPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default LandingView;
