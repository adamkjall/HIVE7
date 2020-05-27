import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { deleteWalkDocument, leaveAWalk, joinAWalk, getWalk } from '../../firebase/firebase.utils';
import calculateAge from '../../helpers/functions/calculateAge.jsx';

import OpenStreetMaps from 'components/OpenStreetMaps';
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
import friends from '../../assets/icons/friends.svg';
import pets from '../../assets/icons/pets.svg';
import bringPetsvg from '../../assets/icons/bringPets.svg';
import chatbox from '../../assets/icons/chatbox.svg';

import { StyledSelectedWalk, StyledMap } from './style';

const SelectedPageContent = ({ error, isLoading, walk }) => {
  const [position, setPosition] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!walk) return;

    fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_API_KEY}&q=${walk.where}&format=json`
    )
      .then(res => res.json())
      .then(data => {
        if (data && data.length) {
          const fetchedPos = data[0];
          setPosition([fetchedPos.lat, fetchedPos.lon]);
        }
      });
  }, [walk]);

  const formatWhere = where => {
    const placeArr = where.split(',');
    const place = placeArr[0];
    const zipCode = placeArr[placeArr.length - 2];
    if (zipCode) return place + ', ' + zipCode;
    return place;
  };

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <StyledSelectedWalk>
        <div className="gray-wrapper">
          <div className="head-wrapper">
            <div className="wrapbackbutton">
              <BackButton showcross />
            </div>
            {walk.attendingPeople.find(id => id === user.id) && (
              <Link
                className="chatbox"
                to={{
                  pathname: '/chat',
                  state: {
                    userToChatWith: walk.user,
                    walkDateTime: walk.date + 'T' + walk.time
                  }
                }}
              >
                <img src={chatbox} alt="Säg hej" />
              </Link>
            )}
          </div>
          <img className="avatar" src={walk.user.photoUrl || avatar} alt="avatar" />
          <div className="authordata">
            <span className="author">{walk.user.displayName}</span>
            <div className="dott" />
            <span className="usersage"> {calculateAge(walk.user.dateOfBirth)} år</span>
          </div>
          <div className="quote">
            <img src={quote} alt="intro" />
            <p>{walk.introtext}</p>
          </div>
        </div>
        <div className="walk-data">
          <img src={clock} alt="time" />
          <p>
            {walk.date} {walk.time}
          </p>
          <img src={walking} alt="walk" />
          <p>{walk.timeduration}</p>
          <img src={location} alt="where" />
          <p>{formatWhere(walk.where)}</p>
        </div>
        <StyledMap>
          <OpenStreetMaps position={position} />
        </StyledMap>
        <hr />
        <div className="walk-data2">
          <img src={friends} alt="bringfriend" />
          <span>Kan vänner följa med?</span>
          <span className="post">{walk.allowFriends ? 'Ja' : 'Nej'} </span>

          <img src={bringPetsvg} alt="bring dog" />
          <span>Finns det husdjur?</span>
          <span className="user">{walk.bringPets ? 'Ja' : 'Nej'} </span>

          <img src={pets} alt="bring pet" />
          <span>Kan husdjur följa med?</span>
          <span className="post">{walk.allowPets ? 'Ja' : 'Nej'} </span>
        </div>
        <div className="buttons">
          {/*  a conditional render that show cancel walk if your the poster, also need confirmation
            and tell others that walk is canceled a conditional render if your the attende that show
            join (this is for next page) or leave if you selected and confirmed this walk
             */}
          {user.id === walk.user.id ? (
            <div>
              <Link to={{ pathname: '/feed/' }}>
                <Button stretch onClick={() => deleteWalkDocument(walk.walkId)}>
                  TA BORT DIN PROMENAD
                </Button>
              </Link>
            </div>
          ) : !walk.attendingPeople ? (
            <Link to={{ pathname: '/matched/' + walk.walkId, state: { walk } }}>
              <Button stretch onClick={() => joinAWalk(user.id, walk.walkId)}>
                FÖLJ MED!
              </Button>
            </Link>
          ) : walk.attendingPeople.find(id => id === user.id) ? (
            <Link to={{ pathname: '/feed/' }}>
              <Button stretch onClick={() => leaveAWalk(user.id, walk.walkId)}>
                AVBOKA
              </Button>
            </Link>
          ) : (
            <Link to={{ pathname: '/matched/' + walk.walkId, state: { walk } }}>
              <Button stretch onClick={() => joinAWalk(user.id, walk.walkId)}>
                FÖLJ MED!
              </Button>
            </Link>
          )}
        </div>
      </StyledSelectedWalk>
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
    <Page metadata={{ title: 'Vald promenad' }}>
      <SelectedPageContent walk={walk} data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default SelectedView;
