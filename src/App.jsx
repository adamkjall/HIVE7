import React, { useContext, useState } from 'react';

import { NotificationContext } from 'contexts/NotificationContext';

import ErrorBoundary from 'components/ErrorBoundary';
import GlobalStyle from 'components/GlobalStyle';
import ScrollToTop from 'components/ScrollToTop';
import Dialog from 'components/UI/Dialog';
import NotificationModal from 'compositions/NotificationModal';
import Nav from 'components/Nav';
import NavBottom from 'components/NavBottom';

// import InstallBanner from 'compositions/InstallBanner';
// import CookiesConsentBanner from 'compositions/CookiesConsentBanner';
import ServiceWorkerRefreshBanner from 'compositions/ServiceWorkerRefreshBanner';
import AppRouter from 'router';

// Name of the custom event emited by the service worker registration script (register-sw.js)
export const SW_UPDATE_EVENT = 'sw.updated';

const App = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);
  return (
    <ErrorBoundary>
      <GlobalStyle fontDisplay="swap" />
      <ErrorBoundary>
        <ScrollToTop>
          {notifications.length ? (
            <NotificationModal
              notification={notifications[0]}
              removeNotification={removeNotification}
            />
          ) : null}
          <AppRouter />
        </ScrollToTop>
      </ErrorBoundary>
      {/*
      * CookiesConsentBanner
      *
      * Enable if you start using cookies in Europe
      * (Like Google Analytics or others...)
      *
      <ErrorBoundary>
        <CookiesConsentBanner />
      </ErrorBoundary>
    */}
      {/*
      * InstallBanner
      *
      * Enable if you wish to provide a guide to install the app to your home page on mobile devices
      *
      <ErrorBoundary>
        <InstallBanner>
          Install this application on your phone by clicking on [IKON] and{' '}
          <strong>Add to Homescreen</strong>.
        </InstallBanner>
      </ErrorBoundary>
    */}
      <ErrorBoundary>
        {/*
         * ServiceWorkerRefreshBanner
         *
         * When a new SW version is updated in the background, it will not apply until window is reloaded.
         * Either it can be forced, but this can be disturbing for the user,
         * Or we can prompt the user to reload.
         *
         * The ServiceWorkerRefreshBanner can do both based on the promptBeforeReloading prop.
         * By default, if it is true, it will display a dialog with a button to reload the page.
         * If you set it to false, it will reload the page without showing the dialog
         */}
        <ServiceWorkerRefreshBanner eventName={SW_UPDATE_EVENT} promptBeforeReloading={false} />
      </ErrorBoundary>
    </ErrorBoundary>
  );
};

export default App;
