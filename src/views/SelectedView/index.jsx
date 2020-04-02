import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { deleteWalkDocument, leaveAWalk, joinAWalk } from '../../firebase/firebase.utils';

import Button from 'components/UI/Button';
import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Alert from 'components/UI/Alert';

import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import family from '../../assets/icons/family.svg';
import friends from '../../assets/icons/friends.svg';
import pets from '../../assets/icons/pets.svg';
import bringPetsvg from '../../assets/icons/bringPets.svg';

import colors from 'tokens/colors.mjs';
import { StyledSelectedWalk } from './style';

const SelectedPageContent = ({ error, isLoading, walk }) => {
  const { user } = useContext(AuthenticationContext);

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledSelectedWalk>
          <div className="box1">
            <Link to={{ pathname: '/profile/' + walk.author, state: { walk } }}>
              <img className="avatar" src={avatar} alt="avatar" />
              <h3 className="author">{walk.author}</h3>{' '}
            </Link>
            {/* <span className="usersage">{walk.authorage}</span> */}
          </div>
          <span className="post">{walk.introtext}</span>
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
          <hr />
          <div className="box2">
            <div>
              <img src={friends} alt="bringfriend" />
              <span className="post">{walk.allowFriends}</span>
            </div>
            <div>
              <img src={family} alt="bring children" />
              <span className="user">{walk.allowChildren}</span>
            </div>
            <div>
              <img src={bringPetsvg} alt="bring dog" />
              <span className="user">{walk.bringPets}</span>
            </div>
            <div>
              <img src={pets} alt="bring pet" />
              <span className="post">{walk.allowPets}</span>
            </div>
          </div>
          <div className="buttons">
            {/*  a conditional render that show cancel walk if your the poster, also need confirmation
            and tell others that walk is canceled a conditional render if your the attende that show
            join (this is for next page) or leave if you selected and confirmed this walk
             */}
            {user.id === walk.user.id ? (
              <Button onClick={() => deleteWalkDocument(walk.walkId)}>Ta bort din promenad</Button>
            ) : !walk.attendingPeople ? (
              <Link to={{ pathname: '/matched/' + walk.walkId, state: { walk } }}>
                <Button onClick={() => joinAWalk(user.id, walk.walkId)}>Följ med!</Button>
              </Link>
            ) : walk.attendingPeople.find(id => id === user.id) ? (
              <Link to={{ pathname: '/feed/' }}>
                <Button onClick={() => leaveAWalk(user.id, walk.walkId)}>Lämna promenad</Button>
              </Link>
            ) : (
              <Link to={{ pathname: '/matched/' + walk.walkId, state: { walk } }}>
                <Button onClick={() => joinAWalk(user.id, walk.walkId)}>Följ med</Button>
              </Link>
            )}
          </div>
        </StyledSelectedWalk>
      </React.Fragment>
    );
  }
};

const SelectedView = walk => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Page>
      <SelectedPageContent
        walk={walk.location.state.walk}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </Page>
  );
};

export default SelectedView;
