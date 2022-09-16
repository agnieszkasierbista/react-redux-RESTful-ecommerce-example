import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);