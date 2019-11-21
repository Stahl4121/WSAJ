import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import theme from './theme';
import 'typeface-roboto';

import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './comp/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root'),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

