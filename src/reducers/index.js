import { combineReducers } from 'redux';
import { fetchMovies } from './reducer_movies';

const rootReducer = combineReducers({
  fetchMovies
});

export default rootReducer;
