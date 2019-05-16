import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {
  render() {
    const {
      movies,
      match: {
        params: { movieId }
      }
    } = this.props;

    const movie = movies && movies.find(movie => movie.id === Number(movieId));

    console.log(movie)
    
    return (
          <div className="movieContainer">
            <h4>{movie.title}</h4>
            <p>
              Cast:{' '}
              <strong style={{ fontWeight: 500, borderRadius: '0', padding: '3px', background: 'none' }}>
                {movie.cast.map(el => `${el}, `)}
              </strong>
            </p>
            <p>
              Year:
              <strong>{movie.year}</strong>
            </p>
          </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.fetchMovies.movies
});

export default connect(mapStateToProps)(Movie);
