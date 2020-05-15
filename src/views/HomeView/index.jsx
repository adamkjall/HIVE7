import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactSwipe from 'react-swipe';

import { firestore, signInWithGoogle } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import H3 from 'components/UI/H3';
import Alert from 'components/UI/Alert';
import Paragraph from 'components/UI/Paragraph';
import Button from 'components/UI/Button';
import blob1 from '../../assets/icons/blob1.svg';
import blob2 from '../../assets/icons/blob2.svg';
import blob3 from '../../assets/icons/blob3.svg';
import blob4 from '../../assets/icons/blob4.svg';

import { StyledContainer } from './style';

const HomePageContent = ({ error, isLoading }) => {
  var reactSwipeEl;
  const startSlide = 0;
  const count = 4;
  const swipeOptions = {
    startSlide: startSlide < count && startSlide >= 0 ? startSlide : 0,
    disableScroll: false,
    continuous: true,
    stopPropagation: false
  };
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <StyledContainer>
          <ReactSwipe
            className="carousel"
            swipeOptions={swipeOptions}
            ref={el => (reactSwipeEl = el)}
            ReactSwipe
            childCount={count}
          >
            <div className="content page1">
              <div className="blobb">
                <img src={blob1} alt="text" className="blobb-img" />
                <div className="insindeblob nr1">
                  <H1>GÅ MAMA!</H1>
                  <p>
                    Promenera med mammor från hela världen för att upptäcka, lära och utvecklas
                    tillsammans.
                  </p>
                </div>
              </div>
              <div />
              <Link to="/login" className="link-login">
                <H3>
                  Har du redan ett konto? <span>Logga in</span>
                </H3>
              </Link>
              <div className="pagnation">
                <div className="reddot" />
                <div className="dott" onClick={() => reactSwipeEl.next()} />
                <div className="dott" onClick={() => reactSwipeEl.slide(2, 300)} />
                <div className="dott" onClick={() => reactSwipeEl.slide(3, 300)} />
              </div>
            </div>
            <div className="content page2">
              <div className="blobb">
                <img src={blob2} alt="text" className="blobb-img" />
                <div className="insindeblob nr2">
                  <p>
                    <span className="h-name">GÅ MAMA!</span>
                    hjälper dig att upptäcka nya platser tillsammans med andra mammor på promenader
                  </p>
                </div>
              </div>
              <div />
              <Link to="/login" className="link-login">
                <H3>
                  Har du redan ett konto? <span>Logga in</span>
                </H3>
              </Link>{' '}
              <div className="pagnation">
                <div className="dott" onClick={() => reactSwipeEl.prev()} />
                <div className="reddot" />
                <div className="dott" onClick={() => reactSwipeEl.slide(2, 300)} />
                <div className="dott" onClick={() => reactSwipeEl.slide(3, 300)} />
              </div>
            </div>
            <div className="content page3">
              <div className="blobb">
                <img src={blob3} alt="text" className="blobb-img" />
                <div className="insindeblob nr3">
                  <p>
                    Med <span className="h-name">GÅ MAMA!</span> får du ett utbyte av språk,
                    erfarenheter och kultur genom att promenera med mammor från hela världen
                  </p>
                </div>
              </div>
              <div />
              <Link to="/login" className="link-login">
                <H3>
                  Har du redan ett konto? <span>Logga in</span>
                </H3>
              </Link>
              <div className="pagnation">
                <div className="dott" onClick={() => reactSwipeEl.slide(0, 300)} />
                <div className="dott" onClick={() => reactSwipeEl.prev()} />
                <div className="reddot" />
                <div className="dott" onClick={() => reactSwipeEl.next()} />
              </div>
            </div>
            <div className="content page4">
              <div className="blobb nr4">
                <H1>Skapa konto</H1>
                <div>
                  <p>
                    för att upptäcka alla möjligheter med <span className="h-name">GÅ MAMA!</span>{' '}
                    Allt börjar med en promenad ...
                  </p>
                </div>
              </div>
              <div className="buttons">
                <Link to="/signup">
                  <Button nature="default" stretch className="landingbutton">
                    SKAPA KONTO
                  </Button>
                </Link>
                <Button
                  nature="default"
                  stretch
                  onClick={signInWithGoogle}
                  className="landingbutton"
                >
                  SKAPA KONTO MED GOOGLE
                </Button>
              </div>
              <Link to="/login" className="link-login">
                <H3>
                  Har du redan ett konto? <span>Logga in</span>
                </H3>
              </Link>
              <div className="pagnation">
                <div className="dott" onClick={() => reactSwipeEl.slide(0, 300)} />
                <div className="dott" onClick={() => reactSwipeEl.slide(1, 300)} />
                <div className="dott" onClick={() => reactSwipeEl.prev()} />
                <div className="reddot" />
              </div>
            </div>
          </ReactSwipe>
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
        description: 'Gå Mama - en app för människor som vill träffa nya vänner.',
        title: 'Gå Mama',
        lang: 'sv'
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
