import React, { useState } from 'react';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Paragraph from 'components/UI/Paragraph';
import Alert from 'components/UI/Alert';

import colors from 'tokens/colors.mjs';
import avatar from '../../assets/icons/profilepic.svg';

const ProfilePageContent = ({ error, isLoading, walk }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <img className="avatar" src={avatar} alt="avatar" />
          <H3 className="author">{walk.author}</H3>{' '}
        </div>
      </React.Fragment>
    );
  }
};

const ProfileView = walk => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <ProfilePageContent
        walk={walk.location.state.walk}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </Page>
  );
};

export default ProfileView;
