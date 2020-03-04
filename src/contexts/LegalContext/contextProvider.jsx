import React, { useState } from 'react';

import { LocalStorage as Storage } from 'helpers/storage';
import LegalContext from './context';

export const CONSENT_STORAGE_KEY = 'consent.time';

const LegalContextProvider = props => {
  const [consentGivenAt, setConsentGivenAt] = useState(Storage.get(CONSENT_STORAGE_KEY));
  const [isConsentGiven, setIsConsentGiven] = useState(!!consentGivenAt);

  const giveConsent = () => {
    const consentGivenAt = Date.now();

    Storage.set(CONSENT_STORAGE_KEY, consentGivenAt);

    setConsentGivenAt(consentGivenAt);
    setIsConsentGiven(true);
  };

  return (
    <LegalContext.Provider
      {...props}
      value={{
        // Make sure to implement everything defined in the context file
        giveConsent,
        isConsentGiven,
        consentGivenAt
      }}
    />
  );
};

export default LegalContextProvider;
