import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import config from 'config';
import App, { SW_UPDATE_EVENT } from './App';
import ApplicationContextProvider from './contexts';

// Register SW
if (config.app.enableSW) {
  import('lib/register-service-worker')
    .then(module => module.default)
    .then(registerServiceWorker => registerServiceWorker(SW_UPDATE_EVENT));
}

const mountElement = document.querySelector('#root');

const launch = (renderMethod, mountElement) =>
  renderMethod(
    <BrowserRouter>
      <ApplicationContextProvider>
        <App />
      </ApplicationContextProvider>
    </BrowserRouter>,
    mountElement
  );

/**
 * Launch the app
 *
 * server-side scripts (either SSR methods or generators like `react-snap`)
 * will need to hydrate the application instead of rendering it
 */
if (mountElement.hasChildNodes()) {
  launch(ReactDOM.hydrate, mountElement);
} else {
  launch(ReactDOM.render, mountElement);
}
