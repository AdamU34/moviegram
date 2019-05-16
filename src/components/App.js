import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, updateResults } from '../actions';
import SearchBar from './SearchBar';
import Movies from './Movies';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies, filteredMovies, updateResults, history } = this.props;

    return (
      <div>
        <div className="Container">
          <SearchBar movies={movies} updateResults={updateResults} />
          <Movies movies={movies} filteredMovies={filteredMovies} history={history}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.fetchMovies.movies,
  filteredMovies: state.fetchMovies.filteredMovies
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
  updateResults: data => dispatch(updateResults(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
