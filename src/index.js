import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import registerServiceWorker from './registerServiceWorker';

const data = [
  {
    title: 'Black Panther',
    director: 'Ryan',
    releaseDate: new Date()
  },
  {
    title: 'Black Panther',
    director: 'Ryan',
    releaseDate: new Date()
  },
  {
    title: 'Black Panther',
    director: 'Ryan',
    releaseDate: new Date()
  }
];

ReactDOM.render(<List movies={data} />, document.getElementById('root'));
registerServiceWorker();
