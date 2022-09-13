import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';
import {
  ADD_TO_CART,
  CLEAR_SELECTED_ATTR,
  GET_PRODUCT_DETAILS_SUCCESS,
  INIT_SUCCESS, SELECT_ATTR,
  SET_CURRENT_CURRENCY, SET_MAIN_PIC,
  TOGGLE_CURRENCY_DROPDOWN_VISIBILITY
} from './actions';

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
    const attribute = state.selected.find((attribute: any) => attribute.id === action.payload.id);
    const selectedAttributes = !attribute ? [...state.selected,
      action.payload
    ] : state.selected.map((item:any) => {

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
    return {
      ...state,
      products: [...state.products, action.payload]
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
  cart: cartReducer
});

export default rootReducer;