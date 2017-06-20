import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './partials/Sidebar';

import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
        <div>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </Container>
    </Router>
  </Provider>;

export default App;
