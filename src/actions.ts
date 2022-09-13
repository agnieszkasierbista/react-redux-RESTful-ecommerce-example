import {Currency} from './components/CurrencySwitcher/CurrencySwitcher.types';
import {ProductInCart, Selected} from './components/ProductDescriptionPage/ProductDescriptionPage.types';

export const TOGGLE_CURRENCY_DROPDOWN_VISIBILITY = 'TOGGLE_CURRENCY_DROPDOWN_VISIBILITY';
export const INIT = 'INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const SET_MAIN_PIC = 'SET_MAIN_PIC';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SELECT_ATTR = 'SELECT_ATTR';
export const CLEAR_SELECTED_ATTR = 'CLEAR_SELECTED_ATTR';

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

export function toggleIsExtended() {
  return {
    type: TOGGLE_CURRENCY_DROPDOWN_VISIBILITY
  };
}