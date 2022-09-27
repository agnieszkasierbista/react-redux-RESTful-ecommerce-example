import {currencySwitcherReducer, productListingPageReducer} from './reducers';
import {initSuccess, setCurrentCurrency, toggleIsExtended} from './actions';
import {Currency, Product} from './types';
import {Category} from './components/CategoryTabs/CategoryTabs.types';

const productA: Product = {
  name: 'someName',
  id: 'someID',
  prices: [{ currency: {symbol: '$', label: 'USD'}, amount: 999 }],
  category: 'someCategory',
  gallery: ['someLinkToPic'],
  inStock: true,
  brand: 'someBrand'
};

const productB: Product = {
  name: 'anotherName',
  id: 'anotherID',
  prices: [{ currency: {symbol: '$', label: 'USD'}, amount: 999 }],
  category: 'anotherCategory',
  gallery: ['anotherLinkToPic'],
  inStock: false,
  brand: 'anotherBrand'
};

const productC: Product = {
  name: 'someOtherName',
  id: 'someOtherID',
  prices: [{ currency: {symbol: '$', label: 'USD'}, amount: 999 }],
  category: 'someOtherCategory',
  gallery: ['someOtherLinkToPic'],
  inStock: true,
  brand: 'someOtherBrand'
};

const categoryA: Category = {
  products: [productA], name: 'someCategory'
};

const categoryB: Category = {
  products: [productB], name: 'all'
};

const categoryC: Category = {
  products: [productC], name: 'someOtherCategory'
};

const currencyA: Currency = {symbol: '$', label: 'USD'};
const currencyB: Currency = {symbol: '£', label: 'GBP'};
const currencyC: Currency = {symbol: 'A$', label: 'AUD'};

const preloadedStateCurrencySwitcher = {isExtended: false, currencies: [], currentCurrency: {symbol: '', label: ''}};
const preloadedStateProductListingPage = {products: []};

describe('reducers', () => {
  describe('currencySwitcher', () => {
    it('should allow for toggling isExtended', () => {
      expect(currencySwitcherReducer({isExtended: false}, toggleIsExtended())).toEqual({
        isExtended: true
      });
    });

    it('should set currencies and currentCurrency', () => {
      expect(currencySwitcherReducer(
        preloadedStateCurrencySwitcher,
        initSuccess([
          {
            categories: [categoryA],
            currencies: [currencyA],
            pathName: 'a'
          }
        ], 'a'))
      ).toEqual({
        isExtended: false,
        currencies: [currencyA],
        currentCurrency: currencyA
      });
    });

    it('should set currentCurrency', () => {
      expect(currencySwitcherReducer(preloadedStateCurrencySwitcher, setCurrentCurrency(currencyA))).toEqual({
        currencies: [],
        currentCurrency: {
          label: 'USD',
          symbol: '$'
        },
        isExtended: false
      });
    });
  });

  describe('productListingPage', () => {
    it('should set initial data for ProductListingPage', () => {
      expect(productListingPageReducer(preloadedStateProductListingPage, initSuccess([
        {
          categories: [categoryB],
          currencies: [currencyB],
          pathName: 'a'
        }
      ], 'a'))).toEqual({
        products: [
          {
            'brand': 'anotherBrand',
            'category': 'anotherCategory',
            'gallery': [
              'anotherLinkToPic'
            ],
            'id': 'anotherID',
            'inStock': false,
            'name': 'anotherName',
            'prices': [
              {
                'amount': 999,
                'currency': {
                  'label': 'USD',
                  'symbol': '$'
                }
              }
            ]
          }
        ]
      });
    });
  });

});