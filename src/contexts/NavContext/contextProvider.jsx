import React, { useState } from 'react';

import NavContext from './context';

const NavContextProvider = props => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <NavContext.Provider
      {...props}
      value={{
        activeTab,
        setActiveTab
      }}
    />
  );
};

export default NavContextProvider;
