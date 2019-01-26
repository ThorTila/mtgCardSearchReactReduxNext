import fetch from 'node-fetch';

const prefix = '[Card]';

export const cardActionTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,
  DETAILS_SEARCH_REQUEST: `${prefix} Details Search Request`,
  DETAILS_SEARCH_SUCCESS: `${prefix} Details Search Success`,
  DETAILS_SEARCH_ERROR: `${prefix} Details Search Error`
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

export const detailsSearchRequest = () => ({
  type: cardActionTypes.DETAILS_SEARCH_REQUEST
});

export const detailsSearchSuccess = details => ({
  type: cardActionTypes.DETAILS_SEARCH_SUCCESS,
  details
});

export const detailsSearchError = () => ({
  type: cardActionTypes.DETAILS_SEARCH_ERROR
});

export const fetchCards = searchPhrase => {
  return async dispatch => {
    dispatch(searchRequest());
    const res = await fetch(
      `https://api.scryfall.com/cards/search?q=${searchPhrase}`
    );
    const { data } = await res.json();
    return dispatch(searchSuccess(data || []));
  };
};

export const fetchCardDetails = id => {
  return async dispatch => {
    dispatch(detailsSearchRequest());
    const res = await fetch(`https://api.scryfall.com/cards/${id}`);
    const card = await res.json();
    return dispatch(detailsSearchSuccess(card || []));
  };
};
