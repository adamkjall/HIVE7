import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Feed from 'compositions/Feed';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

const FeedPageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Feed</H3>
          {/* <Feed /> */}
          <Link to="/selected">
            <Button>Välj 1</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
};

const FeedView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <FeedPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default FeedView;
