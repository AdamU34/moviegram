import React, { Component } from 'react';

class Movies extends Component {
  render() {
    const { filteredMovies, history } = this.props;

    console.log(this.props)

    return (
      <div className="moviesContainer">
        <ul className="SearchList">
          {filteredMovies &&
            filteredMovies.map((movie, i) => (
              <li
                key={movie.title}
                className="SearchListItem"
                style={i < 11 ? { animationDelay: `${i / 10}s` } : { animationDelay: `0s` }}
                onClick={() => history.push(`/movie/${movie.id}`)}
              >
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
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
