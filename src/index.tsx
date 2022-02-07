import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import GlobalFont from 'styles/GlobalFont';
import Router from 'Router';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFont />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
