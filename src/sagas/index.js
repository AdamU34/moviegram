import { takeLatest, all } from 'redux-saga/effects';

import { GET_MOVIES } from '../actions/constants';
import { getMoviesSaga } from './saga_movies';

export function* rootSaga() {
  yield all([takeLatest(GET_MOVIES, getMoviesSaga)]);
}
