import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';

import avatar from '../../assets/icons/profilepic.svg';
import cross from '../../assets/icons/cross.svg';
import shortWaves from '../../assets/icons/short-waves.svg';
import buttonMessage from '../../assets/icons/button-message.svg';

import { StyledMatchedwalk } from './style';

const MatchedPageContent = ({ walk }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <React.Fragment>
      <StyledMatchedwalk>
        <Link className="close-btn" to="/feed">
          <img src={cross} alt="close window" />
        </Link>

        <div className="content-container">
          <H1 className="title">GÅ MAMAS!</H1>
          <p className="gray">
            Du och <span>{walk.user.displayName.split(' ')[0]}</span> ska gå på promenad
            tillsammans.
          </p>
          <img src={shortWaves} alt="shortwavw" />
          <div className="matched-avatars">
            <Link to={{ pathname: '/profile/' + walk.author, state: { walk } }}>
              <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
            </Link>
            <div className="dott" />
            <Link to={{ pathname: '/profile/' + user.displayName, state: { walk } }}>
              <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
            </Link>
          </div>
        </div>

        <Link
          className="hello-btn"
          to={{
            pathname: '/chat',
            state: {
              userToChatWith: walk.user,
              walkDateTime: walk.date + 'T' + walk.time,
              prevPath: location.pathname
            }
          }}
        >
          <Button>
            <img className="icon" src={buttonMessage} />
            <span>SÄG HEJ</span>
          </Button>
        </Link>
      </StyledMatchedwalk>
    </React.Fragment>
  );
};

const MatchedView = walk => {
  return (
    <Page metadata={{ title: 'Matchad' }}>
      <MatchedPageContent walk={walk.location.state.walk} />
    </Page>
  );
};

export default MatchedView;
