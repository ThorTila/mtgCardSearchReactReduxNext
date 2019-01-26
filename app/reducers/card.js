import { cardActionTypes } from '../actions/card';

const initialState = {
  results: [],
  details: {},
  errors: [],
  isFetching: false
};

function card(state = initialState, action) {
  switch (action.type) {
    case cardActionTypes.SEARCH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case cardActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.results,
        isFetching: false
      };
    }
    case cardActionTypes.SEARCH_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }
    default:
      return state;
  }
}

export default card;
