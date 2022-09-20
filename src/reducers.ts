import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';
import {
  ADD_TO_CART,
  CLEAR_SELECTED_ATTR,
  GET_PRODUCT_DETAILS_SUCCESS,
  INIT_SUCCESS, REMOVE_ONE_FROM_CART,
  SELECT_ATTR,
  SET_CURRENT_CURRENCY, SET_CURRENT_NAVIGATION,
  SET_MAIN_PIC,
  TOGGLE_CURRENCY_DROPDOWN_VISIBILITY,
  TOGGLE_MINI_CART_VISIBILITY
} from './actions';
import {getNumberOfItemsInTheCart} from './components/helpers';
import {REHYDRATE} from 'redux-persist/es/constants';
import {ProductInCart, Selected} from './types';

export const currencySwitcherReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {

  case REHYDRATE: {
    return {
      ...state,
      ...(action.payload ? action.payload.currencySwitcher : {}),
    };
  }
  case TOGGLE_CURRENCY_DROPDOWN_VISIBILITY: {
    return {
      ...state,
      isExtended: !state.isExtended
    };
  }
  case INIT_SUCCESS: {
    return {
      ...state,
      currencies: action.payload.currencies,
      currentCurrency: state.currentCurrency || action.payload.currencies[0],
    };
  }
  case SET_CURRENT_CURRENCY: {
    return {
      ...state,
      currentCurrency: action.payload
    };
  }
  default:
    return {...state};
  }
};

export const categoryTabsReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {

  case REHYDRATE: {
    return {
      ...state,
      ...(action.payload ? action.payload.categoryTabs : {})
    };
  }

  case INIT_SUCCESS: {
    return {
      ...state,
      categories: action.payload.categories
    };
  }
  default:
    return {...state};
  }
};

export const tabReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {

  case REHYDRATE: {
    return {
      ...state,
      ...(action.payload ? action.payload.tab : {})
    };
  }

  case INIT_SUCCESS: {
    return {
      ...state,
      currentNavigation: '/'
    };
  }


  case SET_CURRENT_NAVIGATION: {
    return {
      ...state,
      currentNavigation: action.payload
    };
  }
  default:
    return {...state};
  }
};

export const productListingPageReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {

  case REHYDRATE: {
    return {
      ...state,
      ...(action.payload ? action.payload.productListingPage : {})
    };
  }

  case INIT_SUCCESS: {
    return {
      ...state,
      products: action.payload.products
    };
  }
  default:
    return {...state};
  }
};

export const productDescriptionPageReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {
  case GET_PRODUCT_DETAILS_SUCCESS: {
    return {
      ...state,
      productDetails: action.payload.product
    };
  }

  case SELECT_ATTR: {
    const attribute = state.selected.find((attribute: Selected) => attribute.id === action.payload.id);
    const selectedAttributes = !attribute ? [...state.selected,
      action.payload
    ] : state.selected.map((item: Selected) => {

      return item.id === attribute.id ? action.payload : item;
    });

    return {
      ...state,
      selected: selectedAttributes
    };
  }

  case CLEAR_SELECTED_ATTR: {
    return {
      ...state,
      selected: []
    };
  }
  default:
    return {...state};
  }
};

export const galleryReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {
  case SET_MAIN_PIC: {
    return {
      ...state,
      mainPicture: action.payload
    };
  }
  default:
    return {...state};
  }

};

export const cartReducer: Reducer = (state, action: AnyAction) => {
  switch (action.type) {

  case REHYDRATE: {
    return {

      ...state,
      ...(action.payload ? action.payload.cart : {}),
    };
  }

  case TOGGLE_MINI_CART_VISIBILITY: {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }

  case ADD_TO_CART: {

    const ProductInCartDuplicate = state.products.find((productInCart: ProductInCart) => {
      const {count, ...rest} = productInCart;

      return JSON.stringify(rest) === JSON.stringify(action.payload);
    });

    const productsInCartWithCounter = (!ProductInCartDuplicate ? [...state.products, action.payload] : state.products).map((productInCart: ProductInCart) => {
      const {count, ...rest} = productInCart;

      const shouldAddToCount = JSON.stringify(rest) === JSON.stringify(action.payload);
      const currentCount = (shouldAddToCount && productInCart.count) ? productInCart.count + 1 : productInCart.count;

      return {
        ...productInCart,
        count: !productInCart.count ? 1 : currentCount,
      };
    });

    return {
      ...state,
      products: productsInCartWithCounter,
      amount: getNumberOfItemsInTheCart(productsInCartWithCounter)
    };
  }

  case REMOVE_ONE_FROM_CART: {

    const productRemoved = (state.products.map((product: ProductInCart) => {
      if(product === action.payload && (product.count || 0) >= 2) {
        return {
          ...product,
          count: (product.count || 0) - 1
        };
      } else if(product === action.payload && (product.count || 0) === 1) {
        return null;
      } else {
        return product;
      }

    })).filter((product: ProductInCart) => product);

    return {
      ...state,
      products: productRemoved,
      amount: getNumberOfItemsInTheCart(productRemoved)
    };
  }
  default:
    return {...state};
  }

};
const rootReducer = combineReducers({
  currencySwitcher: currencySwitcherReducer,
  categoryTabs: categoryTabsReducer,
  productListingPage: productListingPageReducer,
  productDescriptionPage: productDescriptionPageReducer,
  gallery: galleryReducer,
  cart: cartReducer,
  tab: tabReducer,
});

export default rootReducer;