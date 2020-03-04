import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import ProtectedRoute from './ProtectedRoute';

/**
 * Use @loadable/component for route-based code-splitting
 * @NOTE: full-dynamic import only work with relative paths at the moment
 */
const LoadableView = loadable(props => import(`../views/${props.view}`));

/**
 * Main application router
 * You WANT to keep that component stateless!
 *
 * If you need to inject props to a specific route, use the context API
 * If you need to fetch data (like content for instance), load it from the view itself using componentDidMount()
 *
 * @see https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={props => <LoadableView {...props} view="HomeView" />} />
    <Route
      exact
      path="/examples"
      render={props => <LoadableView {...props} view="ExamplesView" />}
    />
    <Route exact path="/form" render={props => <LoadableView {...props} view="FormView" />} />
    <Route exact path="/login" render={props => <LoadableView {...props} view="LoginView" />} />
    <ProtectedRoute
      exact
      path="/logout"
      redirectTo="/"
      render={props => <LoadableView {...props} view="LogoutView" />}
    />
    <ProtectedRoute
      exact
      path="/private"
      render={props => <LoadableView {...props} view="PrivateView" />}
    />
    <Route render={props => <LoadableView {...props} view="NotFoundView" />} />
  </Switch>
);

export default AppRouter;
