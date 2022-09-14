import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';
import {
  ADD_TO_CART,
  CLEAR_SELECTED_ATTR,
  GET_PRODUCT_DETAILS_SUCCESS,
  INIT_SUCCESS,
  SELECT_ATTR,
  SET_CURRENT_CURRENCY,
  SET_MAIN_PIC,
  TOGGLE_CURRENCY_DROPDOWN_VISIBILITY,
  TOGGLE_MINI_CART_VISIBILITY
} from './actions';
import {ProductInCart, Selected} from './components/ProductDescriptionPage/ProductDescriptionPage.types';
import {getNumberOfItemsInTheCart} from './components/helpers';

export const currencySwitcherReducer: Reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
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
      currentCurrency: action.payload.currencies[0],
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

export const categoryTabsReducer: Reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
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

export const productListingPageReducer: Reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
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

export const productDescriptionPageReducer: Reducer = (state = {}, action: AnyAction) => {
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

export const galleryReducer: Reducer = (state = {}, action: AnyAction) => {
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

export const cartReducer: Reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
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

  case TOGGLE_MINI_CART_VISIBILITY: {
    return {
      ...state,
      isVisible: !state.isVisible,
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
});

export default rootReducer;