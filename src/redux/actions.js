export const ActionTypes = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  ADD_QUERY: 'ADD_QUERY',
  ADD_CITIES: 'ADD_CITIES',
  MORE_INFO: 'MORE_INFO',
  MORE_INFO_DIAGRAM: 'MORE_INFO_DIAGRAM',
  DELETE_CARD: 'DELETE_CARD',
};

export const fetchSuccess = data => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const addQuery = data => ({
  type: ActionTypes.ADD_QUERY,
  payload: data,
});

export const addCities = array => ({
  type: ActionTypes.ADD_CITIES,
  payload: array,
});

export const moreInfo = data => ({
  type: ActionTypes.MORE_INFO,
  payload: data,
});

export const deleteCard = data => ({
  type: ActionTypes.DELETE_CARD,
  payload: data,
});
export const showDiagram = data => ({
  type: ActionTypes.MORE_INFO_DIAGRAM,
  payload: data,
});

