import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
