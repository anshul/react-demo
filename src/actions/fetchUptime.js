import types from '../action_types';
import axios from 'axios';

export default prefix => dispatch => {
  dispatch({ type: types.UPTIME_REQUEST, payload: {} });

  axios('https://ww4.shaadi.com/profiles/1')
    .then(response => {
      dispatch({ type: types.UPTIME_SUCCESS, payload: response.data });
    }).catch(e => {
      if (e && e.response && e.response.data) {
        const { error }  = e.response.data;
        if (error && error.message) {
          dispatch({ type: types.UPTIME_FAIL, payload: {error: `${prefix}: ${error.message}` } });
        } else {
          dispatch({ type: types.UPTIME_FAIL, payload: {error: 'Something went wrong... Try again!'} });
        }
      } else {
        dispatch({ type: types.UPTIME_FAIL, payload: {error: 'Contact tech support'}
      });
      }
    });
};
