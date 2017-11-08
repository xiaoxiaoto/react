import React from 'react';
import ReactDOM from 'react-dom';
import LoginModule from './login/js/login';
import './index.css';
var userEntity={
    userName: "小希",
    password:"111111"
};
ReactDOM.render(
  <LoginModule userEntity={userEntity}/>,
  document.getElementById('root')
);
