import rootReducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';
import {State} from './components/App/App.types';
import {rootEpic} from './epics';
import {Price} from './components/ProductListingPage/ProductListingPage.types';

const preloadedState: State = {
  currencySwitcher: {isExtended: false, currencies: [], currentCurrency: {'symbol': '', 'label': ''}},
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
    }
  }
};

const epicMiddleware = createEpicMiddleware({dependencies: {abc: window.location}});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
  devTools: true,
  preloadedState,
});

epicMiddleware.run(rootEpic);

export default store;