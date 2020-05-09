import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { firestore } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { NavContext } from '../../contexts/NavContext';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import Feed from 'compositions/Feed';
import Alert from 'components/UI/Alert';
import ButtonCreate from 'components/ButtonCreate';

import { StyledFeedView, StyledNav, StyledFeedContainer } from './style';

const FeedPageContent = ({ error, isLoading, walks, user }) => {
  const { activeTab, setActiveTab } = useContext(NavContext);

  const sortWalks = walks =>
    walks.sort((a, b) => {
      const valueA = Number(a.date.replace(/-/gi, '')) + Number(a.time.replace(':', ''));
      const valueB = Number(b.date.replace(/-/gi, '')) + Number(b.time.replace(':', ''));
      return valueA - valueB;
    });

  const sortedWalks = sortWalks(walks);

  const bookedWalks = sortedWalks.filter(walk => {
    const isAttending = walk.attendingPeople.find(id => id === user.id);
    const isUser = walk.user.id === user.id;
    return isAttending || isUser;
  });

  const availableWalks = sortedWalks
    .filter(walk => !bookedWalks.includes(walk))
    .filter(walk => walk.attendingPeople.length === 0)
    .filter(walk => walk.time >= new Date().toLocaleTimeString());

  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <StyledFeedView>
        <StyledNav>
          <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : null}>
            <p>
              Tillgängliga
              <br /> Promenader
            </p>
          </button>
          <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : null}>
            <p>
              Mina <br /> Promenader
            </p>
          </button>
        </StyledNav>

        <ButtonCreate />

        <StyledFeedContainer>
          {activeTab === 0 ? <Feed walks={availableWalks} /> : <Feed walks={bookedWalks} />}
        </StyledFeedContainer>
      </StyledFeedView>
    );
  }
};

const FeedView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walks, setWalks] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    setIsLoading(true);
    const [date, time] = new Date().toISOString().split('T');

    const unsubscribe = firestore
      .collection('walks')
      .where('date', '>=', date)
      .onSnapshot(querySnapshot => {
        const fetchedWalks = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          fetchedWalks.push({
            ...data,
            createdAt: data.createdAt.toDate()
          });
        });
        setWalks(fetchedWalks);
        setIsLoading(false);
      });

    return () => unsubscribe();
  }, []);

  return (
    <Page metadata={{ title: 'Feed' }} displayNavBottom>
      <FeedPageContent user={user} walks={walks} error={error} isLoading={isLoading} />
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
