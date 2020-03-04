import React, { useState } from 'react';

// import { LocalStorage as Storage } from 'helpers/storage';
import MyContext from './context';

// Storage key: this is only to persist the value to e.g. localStorage
// You do not have to use this if you do not need persistence
// export const SOMETHING_STORAGE_KEY = 'something';

const MyContextProvider = props => {
  // const [something, setSomething] = useState(Storage.get(SOMETHING_STORAGE_KEY));
  const [something, setSomething] = useState('something');

  // const setAndStoreSomething = something => {
  //   Storage.set(SOMETHING_STORAGE_KEY, something);
  //
  //   setSomething(something);
  // }

  return (
    <MyContext.Provider
      {...props}
      value={{
        something,
        // setSomething: setAndStoreSomething
        setSomething
      }}
    />
  );
}

export default MyContextProvider;
