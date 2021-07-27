import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Container from './Container';

ReactDOM.render(
  <React.StrictMode>
    {/* This below container component will be a child application in later point */}
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);
