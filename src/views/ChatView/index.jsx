import React, { useState } from 'react';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';

const ChatPageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Chat</H3>
        </div>
      </React.Fragment>
    );
  }
};

const ChatView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <ChatPageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default ChatView;
