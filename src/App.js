import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { RouteConfig } from './routes';
import HomePage from './pages/HomePage/HomePage';
import NoMatchFoundPage from './pages/NoMatchFoundPage/noMatchFoundPage';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={RouteConfig.homePage}>
            <HomePage />
          </Route>
          <Route path={RouteConfig.pageNotFound}>
            <NoMatchFoundPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
