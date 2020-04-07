import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { firestore, getUserData } from '../../firebase/firebase.utils';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Feed from 'compositions/Feed';
import Booked from 'compositions/Booked';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';
import ButtonCreate from 'components/ButtonCreate';

import { StyledFeed } from './style';

const FeedPageContent = ({ error, isLoading, walks }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledFeed>
          <ButtonCreate />

          <H3>Dina Promenader</H3>
          <Booked walks={walks} />
          <H3>Tillgängliga Promenader</H3>
          <Feed walks={walks} />
        </StyledFeed>
      </React.Fragment>
    );
  }
};

const FeedView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walks, setWalks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('walks').onSnapshot(querySnapshot => {
      const fetchedWalks = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        fetchedWalks.push({
          ...data,
          createdAt: data.createdAt.toDate()
        });
      });
      setWalks(fetchedWalks);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Page>
      <FeedPageContent walks={walks} error={error} isLoading={isLoading} />
    </Page>
  );
};

FeedView.propTypes = {
  isLoading: PropTypes.bool,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      allowChildren: PropTypes.string,
      allowPets: PropTypes.string,
      bringPets: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date),
      date: PropTypes.string,
      filterGender: PropTypes.string,
      introText: PropTypes.string,
      walkId: PropTypes.string,
      time: PropTypes.string,
      user: PropTypes.shape({
        createdAt: PropTypes.instanceOf(Date),
        dateOfBirth: PropTypes.string,
        displayName: PropTypes.string,
        email: PropTypes.string,
        lvlOfSwedish: PropTypes.string
      }),
      where: PropTypes.string
    })
  )
};

export default FeedView;
