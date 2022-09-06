import {AnyAction, combineReducers, Reducer} from "@reduxjs/toolkit";
import {TOGGLE_CURRENCY_DROPDOWN_VISIBILITY} from "./actions";

export const currencySwitcherReducer: Reducer = (state = {isExtended: false}, action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_CURRENCY_DROPDOWN_VISIBILITY:
            return {
                ...state,
                isExtended: !state.isExtended
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({currencySwitcher: currencySwitcherReducer});

export default rootReducer;