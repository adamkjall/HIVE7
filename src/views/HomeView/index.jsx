import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { firestore, signInWithGoogle } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Alert from 'components/UI/Alert';
import Paragraph from 'components/UI/Paragraph';
import Button from 'components/UI/Button';

import { StyledContainer } from './style';

const HomePageContent = ({ error, isLoading }) => {
  const { user } = useContext(AuthenticationContext);
  const history = useHistory();

  // checkk if user logged in for the first time with google sign in
  // and redirect user to a new page to add additional data
  useEffect(() => {
    if (user && user.isNewUser) {
      history.push('/welcome');
    }
  }, [user, history]);

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledContainer>
          <H1>Prommis</H1>
          <Paragraph>
            Detta är första sidan. Här kan man skriva om appen. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{' '}
          </Paragraph>
          <div className="buttons">
            <Link to="/signup">
              <Button nature="default" stretch>
                Skapa Konto
              </Button>
            </Link>
            <Button nature="default" stretch onClick={signInWithGoogle}>
              Logga in med Google
            </Button>
            <Link to="/login">
              <Button nature="default" stretch>
                Logga in med E-post
              </Button>
            </Link>
          </div>
        </StyledContainer>
      </React.Fragment>
    );
  }
};

const HomeView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walks, setWalks] = useState([]);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setIsLoading(true);

    //   const result = await getAllPosts();
    //   console.log(result);

    //   setPosts(result);
    //   setIsLoading(false);
    // };

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

    // fetchPosts();
    // const handleLoadingStatus = (data, error, isLoading) => {
    //   setData(data);
    //   setError(error);
    //   setIsLoading(isLoading);
    // };

    // setIsLoading(true);
    // try {
    //   const data = fetchContent({ foo: 'bar' });

    //   handleLoadingStatus(data, null, false);
    // } catch (error) {
    //   /* eslint-disable-next-line no-console */
    //   console.error('Unable to load data', error.message);
    //   handleLoadingStatus(undefined, 'Unable to load content', false);
    // }

    return () => unsubscribe();
  }, []);

  return (
    <Page
      metadata={{
        // Those metadata are optional: they will be injected in the head thanks to react-helmet
        description: 'This is our home page',
        title: 'Home page',
        lang: 'en'
        // image: {
        //   alt: 'Some image',
        //   // (You could also inject an imported image here)
        //   url: 'https://domain.tld/picture.jpg',
        //   width: 310,
        //   height: 310
        // }
      }}
    >
      <HomePageContent error={error} isLoading={isLoading} walks={walks} />
    </Page>
  );
};

export default HomeView;
