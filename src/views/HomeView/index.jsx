import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { firestore, signInWithGoogle } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import H2 from 'components/UI/H2';
import Alert from 'components/UI/Alert';
import Paragraph from 'components/UI/Paragraph';
import Button from 'components/UI/Button';
import blob1 from '../../assets/icons/blob1.svg';
import blob2 from '../../assets/icons/blob2.svg';
import blob3 from '../../assets/icons/blob3.svg';
import blob4 from '../../assets/icons/blob4.svg';

import { StyledContainer } from './style';

const HomePageContent = ({ error, isLoading }) => {
  const [pagenr, setPagenr] = useState(1);

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledContainer>
          {pagenr == '1' && (
            <div className="content1">
              <div className="blobb">
                <img src={blob1} alt="text" />
                <p className="insindeblob">text sida 1</p>
              </div>
              <Link to="/login">
                <H2>Har du redan ett konto? Logga in</H2>
              </Link>
              {pagenr == 1 && (
                <div className="pagnation">
                  <div className="reddot" />
                  <div className="dott" onClick={() => setPagenr(2)} />
                  <div className="dott" onClick={() => setPagenr(3)} />
                  <div className="dott" onClick={() => setPagenr(4)} />
                </div>
              )}
            </div>
          )}
          {pagenr == '2' && (
            <div className="content2">
              <div className="blobb">
                <img src={blob2} alt="text" />
                <p className="insindeblob">text sida 2</p>
              </div>
              <Link to="/login">
                <H2>Har du redan ett konto? Logga in</H2>
              </Link>
              {pagenr == 2 && (
                <div className="pagnation">
                  <div className="dott" onClick={() => setPagenr(1)} />
                  <div className="reddot" />
                  <div className="dott" onClick={() => setPagenr(3)} />
                  <div className="dott" onClick={() => setPagenr(4)} />
                </div>
              )}
            </div>
          )}
          {pagenr == '3' && (
            <div className="content3">
              <div className="blobb">
                <img src={blob3} alt="text" />
                <p className="insindeblob">text sida 3</p>
              </div>
              <Link to="/login">
                <H2>Har du redan ett konto? Logga in</H2>
              </Link>
              {pagenr == 3 && (
                <div className="pagnation">
                  <div className="dott" onClick={() => setPagenr(1)} />
                  <div className="dott" onClick={() => setPagenr(2)} />
                  <div className="reddot" />
                  <div className="dott" onClick={() => setPagenr(4)} />
                </div>
              )}
            </div>
          )}
          {pagenr == '4' && (
            <div className="content4">
              <div className="blobb">
                <img src={blob4} alt="text" />
                <p className="insindeblob">Välkomen till GÅ MAMA!</p>
              </div>

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
                  <H2>Har du redan ett konto? Logga in</H2>
                </Link>
                {pagenr == 4 && (
                  <div className="pagnation">
                    <div className="dott" onClick={() => setPagenr(1)} />
                    <div className="dott" onClick={() => setPagenr(2)} />
                    <div className="dott" onClick={() => setPagenr(3)} />
                    <div className="reddot" />
                  </div>
                )}
              </div>
            </div>
          )}
        </StyledContainer>
      </React.Fragment>
    );
  }
};

const HomeView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walks, setWalks] = useState([]);

  const { user, isAuthenticated } = useContext(AuthenticationContext);
  const history = useHistory();

  // checkk if user logged in for the first time with google sign in
  // and redirect user to a new page to add additional data
  useEffect(() => {
    if (isAuthenticated && user && !user.username) {
      history.push('/signup');
    } else if (isAuthenticated) {
      history.push('/feed');
    }
  }, [user, isAuthenticated, history]);

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
        if (!doc.exists) return;

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
        description: 'This is our Gå Mama',
        title: 'Gå Mama',
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
