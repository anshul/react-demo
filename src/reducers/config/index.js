import types from '../../action_types';

const initialState = {
  title: 'Some React app',
  uptime: null,
  loading: false,
  flash: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPTIME_REQUEST: {
      return {
        ...state,
        loading: true,
        flash: null,
      };
    }
    case types.UPTIME_SUCCESS: {
      return {
        ...state,
        loading: false,
        uptime: action.payload.uptime,
        flash: null,
      };
    }
    case types.UPTIME_FAIL: {
      return {
        ...state,
        loading: false,
        flash: action.payload.error,
      };
    }
    default:
      return state;
  }
}
