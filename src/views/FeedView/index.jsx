import React, { useEffect, useState } from 'react';

import { firestore } from '../../firebase/firebase.utils';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Feed from 'compositions/Feed';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';

const FeedPageContent = ({ error, isLoading, walks }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <div>
          <H3>Lediga Promenader</H3>
          <Feed walks={walks} />
        </div>
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

export default FeedView;
