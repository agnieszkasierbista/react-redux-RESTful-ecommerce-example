import {Currency, InitialData, ProductDetails, ProductInCart, Selected} from './types';
import {Category} from './components/CategoryTabs/CategoryTabs.types';

export const TOGGLE_CURRENCY_DROPDOWN_VISIBILITY = 'TOGGLE_CURRENCY_DROPDOWN_VISIBILITY';
export const INIT = 'INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const SET_MAIN_PIC = 'SET_MAIN_PIC';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_BY_PRODUCT_ID = 'ADD_TO_CART_BY_PRODUCT_ID';
export const SELECT_ATTR = 'SELECT_ATTR';
export const CLEAR_SELECTED_ATTR = 'CLEAR_SELECTED_ATTR';
export const TOGGLE_MINI_CART_VISIBILITY = 'TOGGLE_MINI_CART_VISIBILITY';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';

export function addToCartByProductId(productId: string) {
  return {
    type: ADD_TO_CART_BY_PRODUCT_ID,
    payload: productId
  };
}

export function removeOneFromCart(product: ProductInCart) {
  return {
    type: 'REMOVE_ONE_FROM_CART',
    payload: product
  };

}

export function toggleMiniCartVisibility() {
  return {
    type: TOGGLE_MINI_CART_VISIBILITY
  };
}

export function clearSelectedAttributes() {
  return {
    type: 'CLEAR_SELECTED_ATTR'
  };
}

export function selectAttr(selectedAttr: Selected) {
  return {
    type: 'SELECT_ATTR',
    payload: selectedAttr
  };
}

export function addToCart(product: ProductInCart) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

export function setMainPic(pic: string) {
  return {
    type: SET_MAIN_PIC,
    payload: pic
  };
}

export function getProductDetails(id: string) {
  return {
    type: GET_PRODUCT_DETAILS,
    payload: id
  };
}

export function getProductDetailsSuccess(productDetails: ProductDetails) {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: productDetails
  };
}

export function setCurrentCurrency(clickedCurrency: Currency) {
  return {
    type: SET_CURRENT_CURRENCY,
    payload: clickedCurrency
  };
}

export function init() {
  return {
    type: INIT
  };
}

export function initSuccess(initialData: InitialData) {
  return {
    type: INIT_SUCCESS,
    payload: {
      categories: initialData[0].categories,
      currencies: initialData[0].currencies,
      products: (initialData[0].categories?.find((category: Category) => category.name === 'all')?.products) || []
    }
  };
}

export function toggleIsExtended() {
  return {
    type: TOGGLE_CURRENCY_DROPDOWN_VISIBILITY
  };
}