import {AnyAction, combineReducers, Reducer} from "@reduxjs/toolkit";

export const reducer: Reducer = (state, action: AnyAction) => {
    return {}
}

const rootReducer = combineReducers({reducer});

export default rootReducer;