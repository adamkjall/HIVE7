import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import plus from '../../assets/icons/plus.svg';

const MatchedPageContent = ({ error, isLoading, walk }) => {
  const { user } = useContext(AuthenticationContext);

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Full fart framåt!</H3>
          {user.displayName},<p>{walk.author}</p>
          <p>vill gå på promenad tillsammans med dig.</p>
          <div>
            <Link to={{ pathname: '/profile/' + user.displayName, state: { walk } }}>
              <img className="avatar" src={avatar} alt="avatar" />
            </Link>
            <img className="plus" src={plus} alt="plus" />
            <Link to={{ pathname: '/profile/' + walk.author, state: { walk } }}>
              <img className="avatar" src={avatar} alt="avatar" />
            </Link>
          </div>
          <hr />
          <div className="box2">
            <div className="date">
              <img src={clock} alt="time" />
              <span>
                {walk.date} {walk.time}
              </span>
            </div>
            <div className="timeduration">
              <img src={walking} alt="walk" />
              <span>{walk.timeduration}</span>
            </div>
            <div className="where">
              <img src={location} alt="where" />
              <span>{walk.where}</span>
            </div>
          </div>
          <Link to="/chat">
            <Button>Säj Hej</Button>
          </Link>
        </div>
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
