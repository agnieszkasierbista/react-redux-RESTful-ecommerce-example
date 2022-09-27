import {
  cartReducer, categoryTabsReducer,
  currencySwitcherReducer,
  galleryReducer,
  productDescriptionPageReducer,
  productListingPageReducer,
  tabReducer
} from './reducers';
import {
  addToCart,
  clearSelectedAttributes,
  getProductDetails, getProductDetailsSuccess,
  initSuccess,
  removeOneFromCart,
  selectAttr,
  setCurrentCurrency, setCurrentNavigation,
  setMainPic,
  setMiniCartState,
  toggleIsExtended,
  toggleMiniCartVisibility
} from './actions';
import {Currency, Product, ProductDetails, ProductInCart, Selected} from './types';
import {Category} from './components/CategoryTabs/CategoryTabs.types';

const productA: Product = {
  name: 'someName',
  id: 'someID',
  prices: [{currency: {symbol: '$', label: 'USD'}, amount: 999}],
  category: 'someCategory',
  gallery: ['someLinkToPic'],
  inStock: true,
  brand: 'someBrand'
};

const selected: Selected[] = [];
const selectedWithContent: Selected = {
  id: 'selectedID',
  item: {
    displayValue: 'selectedDisplayValue',
    value: 'selectedValue',
    id: 'selectedValueID',
    selected: true
  }
};

const productDetailsB: ProductDetails = {
  name: '',
  productId: '',
  prices: [],
  gallery: [],
  inStock: true,
  brand: '',
  attributes: [
    {
      id: '',
      items: [
        {
          displayValue: '',
          id: '',
          value: ''
        }
      ],
      name: '',
      type: ''
    }
  ],
  description: '',
};

const productC: Product = {
  name: 'someOtherName',
  id: 'someOtherID',
  prices: [{currency: {symbol: '$', label: 'USD'}, amount: 999}],
  category: 'someOtherCategory',
  gallery: ['someOtherLinkToPic'],
  inStock: true,
  brand: 'someOtherBrand'
};

const productToRemoveFromCart: ProductInCart = {
  productId: 'productID',
  name: 'ProdName',
  description: 'desc',
  gallery: [''],
  brand: 'prodBrand',
  prices: [],
  attributes: [],
  inStock: true,
  selected,
  count: 1
};



const productToAddToCart: ProductInCart = {
  productId: '',
  name: '',
  description: '',
  gallery: [],
  brand: '',
  prices: [],
  attributes: [],
  inStock: true,
  selected,
  count: 7
};

const categoryA: Category = {
  products: [productA], name: 'someCategory'
};

const categoryB: Category = {
  products: [productA], name: 'all'
};

const categoryC: Category = {
  products: [productC], name: 'someOtherCategory'
};

const currencyA: Currency = {symbol: '$', label: 'USD'};
const currencyB: Currency = {symbol: '£', label: 'GBP'};
const currencyC: Currency = {symbol: 'A$', label: 'AUD'};

const preloadedStateCurrencySwitcher = {isExtended: false, currencies: [], currentCurrency: {symbol: '', label: ''}};
const preloadedStateCategoryTabs = {categories: []};
const preloadedStateTab = {currentNavigation: '/'};
const preloadedStateProductListingPage = {products: []};
const preloadedStateProductDescriptionPage = {
  productDetails: {
    productId: '',
    name: '',
    description: '',
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
};
const preloadedStateGallery = {mainPicture: ''};
const preloadedStateCart = {products: [productToRemoveFromCart], isVisible: false, amount: 0, isMiniCartActive: false};

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

  describe('categoryTabs', () => {
    it('should set categories', () => {
      expect(categoryTabsReducer(preloadedStateCategoryTabs, initSuccess([
        {
          categories: [categoryC],
          currencies: [currencyC],
          pathName: 'a'
        }
      ], 'a'))).toEqual({
        categories: [categoryC]
      });
    });
  });

  describe('tab', () => {
    it('should set currentNavigation form initialData', () => {
      expect(tabReducer(preloadedStateTab, initSuccess([
        {
          categories: [categoryB],
          currencies: [currencyB],
          pathName: 'a'
        }
      ], 'a'))).toEqual({
        currentNavigation: 'a'
      });
    });

    it('should set currentNavigation', () => {
      expect(tabReducer(preloadedStateTab, setCurrentNavigation('otherPath'))).toEqual({
        currentNavigation: 'otherPath'
      });
    });
  });

  describe('productListingPage', () => {
    it('should set initial data for ProductListingPage', () => {
      expect(productListingPageReducer(preloadedStateProductListingPage, initSuccess([
        {
          categories: [categoryC],
          currencies: [currencyC],
          pathName: 'a'
        }
      ], 'a'))).toEqual({
        products: []
      });
    });
  });

  describe('productDescriptionPage', () => {
    it('should set initial data for ProductListingPage', () => {
      expect(productDescriptionPageReducer(preloadedStateProductDescriptionPage, getProductDetailsSuccess({product: productDetailsB}))).toEqual({
        productDetails: productDetailsB,
        selected
      });
    });

    it('should set selected attributes', () => {
      expect(productDescriptionPageReducer(preloadedStateProductDescriptionPage, selectAttr(selectedWithContent))).toEqual({
        productDetails: productDetailsB,
        selected: [selectedWithContent]
      });
    });

    it('should clear selected attributes', () => {
      expect(productDescriptionPageReducer(preloadedStateProductDescriptionPage, clearSelectedAttributes())).toEqual({
        productDetails: productDetailsB,
        selected: []
      });
    });

  });

  describe('gallery', () => {
    it('should set main picture', () => {
      expect(galleryReducer(preloadedStateGallery, setMainPic('pathToPic'))).toEqual({
        mainPicture: 'pathToPic'
      });
    });
  });

  describe('cart', () => {
    it('should set miniCart state', () => {
      expect(cartReducer(preloadedStateCart, setMiniCartState(true))).toEqual({
        products: [productToRemoveFromCart],
        isVisible: false,
        amount: 0,
        isMiniCartActive: true
      });
    });

    it('should toggle miniCart visibility', () => {
      expect(cartReducer(preloadedStateCart, toggleMiniCartVisibility())).toEqual({
        products: [productToRemoveFromCart],
        isVisible: true,
        amount: 0,
        isMiniCartActive: false,
      });
    });

    it('should add products to the cart', () => {
      expect(cartReducer(preloadedStateCart, addToCart(productToAddToCart))).toEqual({
        isMiniCartActive: false,
        isVisible: false,
        products: [productToRemoveFromCart, productToAddToCart],
        amount: 8,
      });
    });

    it('should remove one product from the cart', () => {
      expect(cartReducer(preloadedStateCart, removeOneFromCart(productToRemoveFromCart))).toEqual({
        isMiniCartActive: false,
        isVisible: false,
        products: [],
        amount: 0,
      });
    });
  });

});

