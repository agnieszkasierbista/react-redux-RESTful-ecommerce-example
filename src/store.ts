import rootReducer from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {createEpicMiddleware} from "redux-observable";
import {State} from "./components/App/App.types";
import {rootEpic} from "./epics";

const preloadedState: State = {
    currencySwitcher: {isExtended: false, currencies:[], currentCurrency: {"symbol": "$", "label": "USD"}},
    categoryTabs: {categories: []}};

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware),
    devTools: true,
    preloadedState,
});

epicMiddleware.run(rootEpic);

export default store