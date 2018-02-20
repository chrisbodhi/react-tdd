import React, { Component } from 'react';
import logo from './logo.svg';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.movies = props.movies;
  }

  render() {
    return (
      <div className="List">
        <header className="List-header">
          <img src={logo} className="List-logo" alt="logo" />
          <h1 className="List-title">Movies</h1>
        </header>
        <div className="headers">
          <div className="column-headers">Title</div>
          <div className="column-headers">Director</div>
          <div className="column-headers">Release Date</div>
        </div>
        <ul>
          {this.movies.map((movie, index) => (
            <li key={index} className="movie"></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
