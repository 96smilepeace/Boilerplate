import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import variables from './styles/variables';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
