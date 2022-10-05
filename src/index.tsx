import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import {ThemeProvider} from 'styled-components';
import { theme } from './theme';
import {GlobalStyle} from './components/GlobalStyle/GlobalStyle';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>
);