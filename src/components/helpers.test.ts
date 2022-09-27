import {
  createDefaultAttrObj, findPrice,
  getIsSelected,
  getNumberOfItemsInTheCart,
  getProductDescriptionPageLink,
  getProductDescriptionPagePath,
  getTabLink,
  getTabPath
} from './helpers';
import {AttributeSet, Currency, Product, ProductAttributeItems, ProductInCart} from '../types';

const product: Product = { name: 'productName', id: 'productID', prices: [], category: 'categoryName', gallery: [], inStock: true, brand: 'productBrand' };
const productsInCartWithCounter: ProductInCart[] = [{
  productId: '',
  name: '',
  description: '',
  gallery: [],
  brand: '',
  prices: [],
  inStock: true,
  attributes: [
    {
      id: '',
      name: '',
      type: '',
      items: [
        {
          displayValue: '',
          value: '',
          id: ''
        }
      ]
    }
  ],
  selected: [
    {
      id: '',
      item: {
        displayValue: '',
        value: '',
        id: '',
        selected: true
      }
    }
  ],
  count: 1
}, {
  productId: '',
  name: '',
  description: '',
  gallery: [],
  brand: '',
  prices: [],
  inStock: true,
  attributes: [
    {
      id: '',
      name: '',
      type: '',
      items: [
        {
          displayValue: '',
          value: '',
          id: ''
        }
      ]
    }
  ],
  selected: [
    {
      id: '',
      item: {
        displayValue: '',
        value: '',
        id: '',
        selected: true
      }
    }
  ],
  count: 3
}, {
  productId: '',
  name: '',
  description: '',
  gallery: [],
  brand: '',
  prices: [],
  inStock: true,
  attributes: [
    {
      id: '',
      name: '',
      type: '',
      items: [
        {
          displayValue: '',
          value: '',
          id: ''
        }
      ]
    }
  ],
  selected: [
    {
      id: '',
      item: {
        displayValue: '',
        value: '',
        id: '',
        selected: true
      }
    }
  ],
  count: 5
}];
const productInCartWithCounterFilled: ProductInCart = {
  productId: '',
  name: '',
  description: '',
  gallery: [],
  brand: '',
  prices: [
    {
      currency: {
        symbol: '$',
        label: 'USD'
      },
      amount: 1
    },
    {
      currency: {
        symbol: '£',
        label: 'GBP'
      },
      amount: 2
    },
    {
      currency: {
        symbol: 'A$',
        label: 'AUD'
      },
      amount: 3
    },
    {
      currency: {
        symbol: '¥',
        label: 'JPY'
      },
      amount: 4
    },
    {
      currency: {
        symbol: '₽',
        label: 'RUB'
      },
      amount: 5
    }
  ],
  inStock: true,
  attributes: [
    {
      id: '',
      name: '',
      type: '',
      items: [
        {
          displayValue: '',
          value: '',
          id: ''
        }
      ]
    }
  ],
  selected: [
    {
      id: '',
      item: {
        displayValue: '',
        value: '',
        id: '',
        selected: true
      }
    }
  ]
};

const item: ProductAttributeItems = {
  displayValue: '',
  value: '',
  id: ''
};

const attribute: AttributeSet = {
  id: '',
  name: '',
  type: '',
  items: [
    {
      displayValue: '',
      value: '',
      id: ''
    }
  ]
};

const attributeFilled: AttributeSet = {
  id: 'attrID',
  name: 'attrName',
  type: 'attrType',
  items: [
    {
      displayValue: 'displayValue',
      value: 'value',
      id: 'valueID'
    }
  ]
};

const currentCurrency: Currency = {symbol: '$', label: 'USD'};

describe('helpers', () => {
  describe('getTabLink', () => {
    it('should create a link starting with categories/', () => {
      expect(getTabLink('something')).toEqual('categories/something');
    });

    it('should create the root link', () => {
      expect(getTabLink('all')).toEqual('/');
    });
  });

  describe('getTabPath', () => {
    it('should create a path starting with /categories/', () => {
      expect(getTabPath('something')).toEqual('/categories/something');
    });

    it('should create the root link', () => {
      expect(getTabPath('all')).toEqual('/');
    });
  });

  describe('getProductDescriptionPageLink', () => {
    it('should create a link starting with /categories/ and containing category name and productID', () => {
      expect(getProductDescriptionPageLink('categoryName', 'productID')).toEqual('/categories/categoryName/productID');
    });
  });

  describe('getProductDescriptionPagePath', () => {
    it('should create a path starting with /categories/ and containing category name and productID', () => {
      expect(getProductDescriptionPagePath(product)).toEqual('/categories/categoryName/productID');
    });
  });

  describe('getNumberOfItemsInTheCart', () => {
    it('should sum up items count in the cart', () => {
      expect(getNumberOfItemsInTheCart(productsInCartWithCounter)).toEqual(9);
    });
  });

  describe('getIsSelected', () => {
    it('should check if an attribute is selected', () => {
      expect(getIsSelected(productInCartWithCounterFilled, item, attribute)).toEqual(true);
    });
  });


  describe('createDefaultAttrObj', () => {
    it('should creat a default attribute object', () => {
      expect(createDefaultAttrObj(attributeFilled)).toEqual({
        id: 'attrID',
        item: {
          displayValue: 'displayValue',
          value: 'value',
          id: 'valueID',
          selected: true
        }
      });
    });
  });

  describe('findPrice', () => {
    it('should select a price according to the currentCurrency', () => {
      expect(findPrice(productInCartWithCounterFilled, currentCurrency)).toEqual({
        currency: {
          symbol: '$',
          label: 'USD'
        },
        amount: 1
      });
    });
  });
});