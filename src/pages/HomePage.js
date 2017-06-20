import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUptime } from '../actions';

const HomePage = props =>
  <div style={{ padding: 20 }}>
    <h1>{props.title}</h1>
    <h3>Uptime is {props.uptime}</h3>
    <p>
      <button onClick={props.fetchUptime}>Fetch uptime</button>
    </p>
  </div>;

HomePage.defaultProps = {
  uptime: '...',
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  uptime: PropTypes.string,
  fetchUptime: PropTypes.func.isRequired,
};

const selector = state => ({
  title: state.config.title,
});

export default connect(selector, { fetchUptime })(HomePage);
