import React from 'react';
import ReactDOM from 'react-dom';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enyzme.configure({ adapter: new Adapter() });

import List from './List';

const data = [
  {
    title: '',
    director: '',
    releaseDate: ''
  }, {
    title: '',
    director: '',
    releaseDate: ''
  }, {
    title: '',
    director: '',
    releaseDate: ''
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List movies={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an unordered list', () => {
  const list = shallow(<List movies={data} />);
  expect(list.find(<ul />)).toBeTruthy();
});

it('renders as many movies as are passed in', () => {
  const list = shallow(<List movies={data} />);
  expect(list.find('li.movie').length).toBe(3);
});

it('renders three columns for title, director, and release date', () => {
  const list = shallow(<List movies={data} />);
  expect(list.find('div.column-headers').length).toBe(3);
  expect(list.find('div.column-headers').map(d => d.text())).toEqual(['Title', 'Director', 'Release Date']);
});



/* movie list

~~it shows a list of movies~~

~has columns with:~
  - title
  - director
  - release date

has a sort-by for columns

~data is hardcoded~
*/
