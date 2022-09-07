import {AnyAction, combineReducers, Reducer} from "@reduxjs/toolkit";
import {INIT_SUCCESS, SET_CURRENT_CURRENCY, TOGGLE_CURRENCY_DROPDOWN_VISIBILITY} from "./actions";

export const currencySwitcherReducer: Reducer = (state = {isExtended: false}, action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_CURRENCY_DROPDOWN_VISIBILITY:
            return {
                ...state,
                isExtended: !state.isExtended
            }
        case INIT_SUCCESS:
            return {
                ...state,
                currencies: action.payload.currencies,
                currentCurrency: action.payload.currencies[0],
            }
        case SET_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.payload
            }
        default:
            return state
    }
}

export const categoryTabsReducer: Reducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories
            }
        default:
            return state
    }
}

export const productListingPageReducer: Reducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    currencySwitcher: currencySwitcherReducer,
    categoryTabs: categoryTabsReducer,
    productListingPage: productListingPageReducer
});

export default rootReducer;