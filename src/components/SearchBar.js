import React, { Component } from 'react';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#999"
      d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.1 15.4 12.6 14.4 13.7L14.7 14H15.5L20.5 19 19 20.5 14 15.5V14.7L13.7 14.4C12.6 15.4 11.1 16 9.5 16A6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5 5 12 7 14 9.5 14 12 14 14 12 14 9.5 14 7 12 5 9.5 5Z"
    />
  </svg>
);

class SearchBar extends Component {
  inputValue = React.createRef();

  handleOnChange = e => {
    const { movies, updateResults } = this.props;
    const input = this.inputValue.current.value;
    let searchTerm = input.toLowerCase();
    const movieResults = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.year.toLowerCase().includes(searchTerm) ||
        movie.cast.find(item => item.toLowerCase().includes(searchTerm))
    );

    updateResults(movieResults);
  };

  render() {
    return (
        <div className="InputGroup InlineSearch">
          <input
            ref={this.inputValue}
            placeholder="Search for movie by name, year or cast"
            onChange={e => this.handleOnChange(e)}
          />
          <SearchIcon />
        </div>
    );
  }
}

export default SearchBar;
