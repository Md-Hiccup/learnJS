import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';

ReactDOM.render(
  <App cat={5} txt = "This is the props text" />,
  document.getElementById('root'),
);
