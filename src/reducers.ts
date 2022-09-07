import {AnyAction, combineReducers, Reducer} from "@reduxjs/toolkit";
import {INIT_SUCCESS, TOGGLE_CURRENCY_DROPDOWN_VISIBILITY} from "./actions";

export const currencySwitcherReducer: Reducer = (state = {isExtended: false}, action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_CURRENCY_DROPDOWN_VISIBILITY:
            return {
                ...state,
                isExtended: !state.isExtended
            }
        // case INIT_SUCCESS:
        //     return {
        //         ...state,
        //         currencies: action.payload.currencies
        //     }
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


const rootReducer = combineReducers({
    currencySwitcher: currencySwitcherReducer,
    categoryTabs: categoryTabsReducer
});

export default rootReducer;