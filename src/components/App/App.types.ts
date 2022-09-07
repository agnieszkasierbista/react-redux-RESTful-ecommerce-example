import {CategoryTabsProps} from "../CategoryTabs/CategoryTabs.types";
import {CurrencySwitcherStateProps} from "../CurrencySwitcher/CurrencySwitcher.types";

export interface State {
    currencySwitcher: CurrencySwitcherStateProps,
    categoryTabs: CategoryTabsProps,

}

export interface AppProps extends AppOwnProps,
    AppStateProps,
    AppDispatchProps {
}

export interface AppOwnProps {

}

export interface AppStateProps {

}

export interface AppDispatchProps {
    dispatchInit: () => void,
}