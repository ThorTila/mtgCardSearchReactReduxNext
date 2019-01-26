import fetch from 'node-fetch';

const prefix = '[Card]';

export const cardActionTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`
};

export const searchRequest = () => ({
  type: cardActionTypes.SEARCH_REQUEST
});

export const searchSuccess = results => ({
  type: cardActionTypes.SEARCH_SUCCESS,
  results
});

export const searchError = () => ({
  type: cardActionTypes.SEARCH_ERROR
});

export const fetchCards = searchPhrase => {
  return async dispatch => {
    dispatch(searchRequest);
    const res = await fetch(
      `https://api.scryfall.com/cards/search?q=${searchPhrase}`
    );
    const { data } = await res.json();
    return dispatch(searchSuccess(data || []));
  };
};
