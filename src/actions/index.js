import * as CONST from './constants';

export const getMovies = () => ({
  type: CONST.GET_MOVIES
});

export const setMovies = movies => ({
  type: CONST.SET_MOVIES,
  payload: movies
});

export const updateResults = results => ({
  type: CONST.UPDATE_RESULTS,
  payload: results
});
