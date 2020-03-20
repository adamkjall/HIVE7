import React, { useEffect, useState } from 'react';

import { getAllPosts, firestore } from '../../firebase/firebase.utils';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Paragraph from 'components/UI/Paragraph';
import Alert from 'components/UI/Alert';
import PostForm from 'compositions/PostForm';
import Feed from 'compositions/Feed';

const HomePageContent = ({ error, isLoading, posts }) => {
  // const posts = [
  //   { displayName: 'Adam', title: 'Första post', text: 'Hello world! Min första post' },
  //   { displayName: 'Åsa', title: 'Första post', text: 'Hello world! Min första post' }
  // ];
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <H1>Home View</H1>
        <div
          style={{ display: 'grid', width: '100%', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
        >
          <Feed posts={posts} />
          <PostForm />
        </div>
      </React.Fragment>
    );
  }
};

const HomeView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setIsLoading(true);

    //   const result = await getAllPosts();
    //   console.log(result);

    //   setPosts(result);
    //   setIsLoading(false);
    // };

    firestore.collection('posts').onSnapshot(querySnapshot => {
      const newPosts = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        newPosts.push({
          ...data,
          createdAt: data.createdAt.toDate()
        });
      });
      setPosts([...posts, ...newPosts]);
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
      <HomePageContent data={data} error={error} isLoading={isLoading} posts={posts} />
    </Page>
  );
};

export default HomeView;
