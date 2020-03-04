import React, { useEffect, useState } from 'react';

import Page from 'compositions/Page';
import Loader from 'compositions/Loader';
import H1 from 'components/UI/H1';
import Paragraph from 'components/UI/Paragraph';
import Alert from 'components/UI/Alert';

const HomePageContent = ({ error, isLoading }) => {
  if (isLoading) {
    return <Loader fullScreen />;
  } else if (error) {
    return <Alert status="error"></Alert>;
  } else {
    return (
      <React.Fragment>
        <H1>Home View</H1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </React.Fragment>
    );
  }
};

const HomeView = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
    //   const handleLoadingStatus = (data, error, isLoading) => {
  //     setData(data);
  //     setError(error);
  //     setIsLoading(isLoading);
  //   };
  //
  //   setIsLoading(true);
  //   try {
  //     const data = fetchContent({ foo: 'bar' });
  //
  //     handleLoadingStatus(data, null, false);
  //   } catch (error) {
  //     /* eslint-disable-next-line no-console */
  //     console.error('Unable to load data', error.message);
  //     handleLoadingStatus(undefined, 'Unable to load content', false);
  //   }
  // }, []);

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
      <HomePageContent data={data} error={error} isLoading={isLoading} />
    </Page>
  );
};

export default HomeView;
