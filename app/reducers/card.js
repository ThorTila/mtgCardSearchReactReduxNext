import { cardActionTypes } from '../actions/card';

const initialState = {
  results: [],
  details: {},
  errors: [],
  isFetching: false
};

function card(state = initialState, action) {
  switch (action.type) {
    case cardActionTypes.DETAILS_SEARCH_REQUEST:
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
    case cardActionTypes.DETAILS_SEARCH_ERROR:
    case cardActionTypes.SEARCH_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }
    case cardActionTypes.DETAILS_SEARCH_SUCCESS: {
      return {
        ...state,
        details: action.details,
        isFetching: false
      };
    }
    default:
      return state;
  }
}

export default card;
