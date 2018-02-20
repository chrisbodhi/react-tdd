import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* movie list

it shows a list of movies

has columns with:
  - title
  - director
  - release date

has a sort-by for columns

data is hardcoded
*/
