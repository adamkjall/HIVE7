import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

const SelectedPageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Selected</H3>
          <Link to="/profile">
            <Button>profile</Button>
          </Link>
          <Link to="/matched">
            <Button>Välj 1</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
};

const SelectedView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <SelectedPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default SelectedView;
