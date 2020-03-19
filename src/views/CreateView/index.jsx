import React, { useState } from 'react';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import PostForm from 'compositions/PostForm';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';

const CreatePageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Skapa ny promenad</H3>
          <PostForm />
        </div>
      </React.Fragment>
    );
  }
};

const CreateView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <CreatePageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default CreateView;
