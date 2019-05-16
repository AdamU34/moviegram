import { put } from 'redux-saga/effects';
import { setMovies, updateResults } from '../actions';

const data = require('../data/movies.json');

export function* getMoviesSaga(action) {
  try {
    yield put(setMovies(data.movies));
    yield put(updateResults(data.movies));
  } catch (error) {
    console.log(error.toString());
  }
}
