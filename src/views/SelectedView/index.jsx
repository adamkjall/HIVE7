import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { deleteWalkDocument, leaveAWalk, joinAWalk, getWalk } from '../../firebase/firebase.utils';
import calculateAge from '../../helpers/functions/calculateAge.jsx';

import BackButton from 'components/BackButton';
import Button from 'components/UI/Button';
import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Alert from 'components/UI/Alert';
import quote from '../../assets/icons/quote.svg';
import location from '../../assets/icons/location.svg';
import avatar from '../../assets/icons/profilepic.svg';
import walking from '../../assets/icons/walking.svg';
import clock from '../../assets/icons/time.svg';
import family from '../../assets/icons/family.svg';
import friends from '../../assets/icons/friends.svg';
import pets from '../../assets/icons/pets.svg';
import bringPetsvg from '../../assets/icons/bringPets.svg';

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
          <BackButton />
          <Link to={{ pathname: '/profile/' + walk.author, state: { walk } }}>
            <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
          </Link>
          <div className="authordata">
            <span className="author">{walk.user.displayName}</span>
            <div className="dott" />
            <span className="usersage"> {calculateAge(walk.user.dateOfBirth)} år</span>
          </div>
          <div className="quote">
            <img src={quote} alt="intro" />
            <span>{walk.introtext}</span>
          </div>
          <div className="walk-data">
            <div className="date">
              <img src={clock} alt="time" />
              <p>
                {walk.date} {walk.time}
              </p>
            </div>
            <div className="duration">
              <img src={walking} alt="walk" />
              <p>{walk.timeduration} timmar</p>
            </div>
            <div className="where">
              <img src={location} alt="where" />
              <p>{walk.where}</p>
            </div>
          </div>
          <hr />
          <div className="walk-data2">
            <img src={friends} alt="bringfriend" />
            <span>Kan vänner följa med?</span>
            <span className="post">{walk.allowFriends == 'on' ? 'Ja' : 'Nej'} </span>

            <img src={family} alt="bring children" />
            <span>Kan barn följa med?</span>
            <span className="user">{walk.allowChildren == 'on' ? 'Ja' : 'Nej'}</span>

            <img src={bringPetsvg} alt="bring dog" />
            <span>Finns det husdjur?</span>
            <span className="user">{walk.bringPets == 'on' ? 'Ja' : 'Nej'} </span>

            <img src={pets} alt="bring pet" />
            <span>Kan husdjur följa med?</span>
            <span className="post">{walk.allowPets == 'on' ? 'Ja' : 'Nej'} </span>
          </div>
          <div className="buttons">
            {/*  a conditional render that show cancel walk if your the poster, also need confirmation
            and tell others that walk is canceled a conditional render if your the attende that show
            join (this is for next page) or leave if you selected and confirmed this walk
             */}
            {user.id === walk.user.id ? (
              <div>
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
                <Link to={{ pathname: '/feed/' }}>
                  <Button onClick={() => deleteWalkDocument(walk.walkId)}>
                    Ta bort din promenad
                  </Button>
                </Link>
              </div>
            ) : !walk.attendingPeople ? (
              <Link to={{ pathname: '/matched/' + walk.walkId, state: { walk } }}>
                <Button onClick={() => joinAWalk(user.id, walk.walkId)}>Följ med!</Button>
              </Link>
            ) : walk.attendingPeople.find(id => id === user.id) ? (
              <div>
                <Link
                  to={{
                    pathname: '/chat',
                    state: {
                      userToChatWith: walk.user
                    }
                  }}
                >
                  <Button>Säj Hej</Button>
                </Link>
                <Link to={{ pathname: '/feed/' }}>
                  <Button onClick={() => leaveAWalk(user.id, walk.walkId)}>Avboka promenad</Button>
                </Link>
              </div>
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

const SelectedView = props => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [walk, setWalk] = useState(undefined);
  const { postId: walkId } = useParams();

  useEffect(() => {
    if (walkId) {
      setIsLoading(true);
      getWalk(walkId).then(data => {
        setWalk(data);
        setIsLoading(false);
      });
    }
  }, [walkId]);

  return (
    <Page>
      <SelectedPageContent walk={walk} data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default SelectedView;
