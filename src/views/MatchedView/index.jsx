import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import clock from '../../assets/icons/time.svg';

import { StyledMatchedwalk } from './style';

const MatchedPageContent = ({ error, isLoading, walk }) => {
  const { user } = useContext(AuthenticationContext);

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledMatchedwalk>
          <Link to="/feed">
            <img className="close" src={cross} alt="close window" />
          </Link>
          <H1>Full fart framåt!</H1>
          <p className="gray">
            Du och
            <span>
              {walk.user.displayName}
              {walk.user.username}
            </span>
            ska gå på promenad tillsammans.
          </p>
          <div className="matched-avatars">
            <Link to={{ pathname: '/profile/' + walk.author, state: { walk } }}>
              <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
            </Link>
            <div className="dott" />
            <Link to={{ pathname: '/profile/' + user.displayName, state: { walk } }}>
              <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
            </Link>
          </div>
          <hr />
          <div className="date-time">
            <img src={clock} alt="time" />
            <span>
              {walk.date}, {walk.time}
            </span>
            <hr />
            <img src={location} alt="where" />
            <span>{walk.where}</span>
          </div>
          <div className="wrapp-button">
            <Link
              to={{
                pathname: '/chat',
                state: {
                  userToChatWith: walk.user,
                  walkDateTime: walk.date + 'T' + walk.time
                }
              }}
            >
              <Button>SÄG HEJ</Button>
            </Link>
          </div>
        </StyledMatchedwalk>
      </React.Fragment>
    );
  }
};

const MatchedView = walk => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <MatchedPageContent
        walk={walk.location.state.walk}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </Page>
  );
};

export default MatchedView;
