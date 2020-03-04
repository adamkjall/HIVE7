import React from 'react';

export default React.createContext({
  giveConsent: () => {},
  isConsentGiven: false,
  consentGivenAt: undefined
});
