import {Currency} from "./components/CurrencySwitcher/CurrencySwitcher.types";

export const TOGGLE_CURRENCY_DROPDOWN_VISIBILITY = "TOGGLE_CURRENCY_DROPDOWN_VISIBILITY";
export const INIT = "INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const SET_CURRENT_CURRENCY = "SET_CURRENT_CURRENCY";

export function setCurrentCurrency(clickedCurrency: Currency) {
    return {
        type: SET_CURRENT_CURRENCY,
        payload: clickedCurrency
    }
}

export function init() {
    return {
        type: INIT
    }
}

export function toggleIsExtended() {
    return {
        type: TOGGLE_CURRENCY_DROPDOWN_VISIBILITY
    }
}