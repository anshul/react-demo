import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container';
import HomePage from './pages/HomePage';

import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </Container>
    </Router>
  </Provider>;

export default App;
