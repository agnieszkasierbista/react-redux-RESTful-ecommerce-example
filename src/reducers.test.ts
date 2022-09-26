import {currencySwitcherReducer} from './reducers';
import {initSuccess, setCurrentCurrency, toggleIsExtended} from './actions';
import {Currency, Product} from './types';
import {Category} from './components/CategoryTabs/CategoryTabs.types';

const productA: Product = {
  name: 'a',
  id: 'b',
  prices: [],
  category: 'c',
  gallery: ['d'],
  inStock: true,
  brand: 'z'
};

const categoryA: Category = {
  products: [productA], name: ''
};

const currencyA: Currency = {symbol: '$', label: 'USD'};

const preloadedState = {isExtended: false, currencies: [], currentCurrency: {symbol: '', label: ''}};

describe('reducers', () => {
  describe('currencySwitcher', () => {
    it('should allow for toggling isExtended', () => {
      expect(currencySwitcherReducer({isExtended: false}, toggleIsExtended())).toEqual({
        isExtended: true
      });
    });

    it('should set currencies and currentCurrency', () => {
      expect(currencySwitcherReducer(
        preloadedState,
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
      expect(currencySwitcherReducer(preloadedState, setCurrentCurrency(currencyA))).toEqual({
        currencies: [],
        currentCurrency: {
          label: 'USD',
          symbol: '$'
        },
        isExtended: false
      });
    });
  });
});