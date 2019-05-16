import * as CONST from '../actions/constants';

const defaultState = {
  movies: [],
  filteredMovies: []
};

export const fetchMovies = (state = defaultState, action) => {
  switch (action.type) {
    case CONST.SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case CONST.UPDATE_RESULTS:
      return {
        ...state,
        filteredMovies: [...action.payload]
      }

    default:
      return state;
  }
};
