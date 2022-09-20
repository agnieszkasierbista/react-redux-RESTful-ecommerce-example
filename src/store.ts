import rootReducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {State} from './types';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const preloadedState: State = {
  currencySwitcher: {isExtended: false, currencies: [], currentCurrency: {symbol: '', label: ''}},
  categoryTabs: {categories: []},
  productListingPage: {products: []},
  productDescriptionPage: {
    productDetails: {
      productId: '',
      name: '',
      description: 'string',
      gallery: [],
      brand: '',
      prices: [],
      inStock: true,
      attributes: [{
        id: '',
        name: '',
        type: '',
        items: [{
          displayValue: '',
          value: '',
          id: ''
        }]
      }]
    },
    selected: []
  },
  gallery: {mainPicture: ''},
  cart: {products: [], isVisible: false, amount: 0},
  tab: {currentNavigation: '/'}
};

const epicMiddleware = createEpicMiddleware({dependencies: {abc: window.location}});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(epicMiddleware),
  devTools: true,
  preloadedState,
});

epicMiddleware.run(rootEpic);

const persistor = persistStore(store);

export {store, persistor};