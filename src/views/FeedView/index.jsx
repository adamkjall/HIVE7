import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { firestore } from '../../firebase/firebase.utils';

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
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walks, setWalks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('walks').onSnapshot(querySnapshot => {
      const newWalks = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        newWalks.push({
          ...data,
          createdAt: data.createdAt.toDate()
        });
      });
      setWalks([...newWalks]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Page>
      <FeedPageContent walks={walks} data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

FeedView.propTypes = {
  isLoading: PropTypes.bool,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      allowChildren: PropTypes.string,
      allowPets: PropTypes.string,
      author: PropTypes.string,
      bringPets: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date),
      date: PropTypes.string,
      filterGender: PropTypes.string,
      introText: PropTypes.string,
      postId: PropTypes.string,
      time: PropTypes.string,
      userId: PropTypes.string,
      where: PropTypes.string
    })
  )
};

export default FeedView;
