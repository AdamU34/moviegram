import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import Movie from './components/Movie'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/movie/:movieId" component={Movie} />
        <Route exact path="/" component={App} />
        <Route
          component={() => (
            <div style={{ margin: '50px', maxWidth: '50%' }}>
              <h1>Page not found</h1>
              <h3>Either something went wrong or the page doesn't exist anymore.</h3>
            </div>
          )}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
