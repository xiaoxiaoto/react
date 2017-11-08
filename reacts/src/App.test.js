import React from 'react';
import ReactDOM from 'react-dom';
import LoginModule from './login/js/login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginModule />, div);
});
