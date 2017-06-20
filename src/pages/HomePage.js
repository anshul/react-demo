import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUptime } from '../actions';

const HomePage = props =>
  <div style={{ padding: 20 }}>
    <h1 onClick={props.onHeaderClick}>{props.config.title}</h1>
    {props.config.uptime && !props.config.loading && <h3>Uptime is {props.config.uptime}</h3>}
    {props.config.loading && <h3>...</h3>}
    {props.config.flash && <p style={{ color: 'red'}}>{props.config.flash}</p>}
    <p>
      <button disabled={props.config.loading} onClick={() => props.fetchUptime('Oops')}>Fetch uptime</button>
    </p>
  </div>;

HomePage.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    flash: PropTypes.string,
    uptime: PropTypes.string,
  }).isRequired,
  fetchUptime: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

const selector = state => ({
  config: state.config,
});

export default connect(selector, {
  fetchUptime,
  onHeaderClick: () => () => console.log('Header clicked'),
})(HomePage);
