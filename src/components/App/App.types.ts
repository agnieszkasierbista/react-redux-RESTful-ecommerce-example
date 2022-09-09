import {Currency} from "../CurrencySwitcher/CurrencySwitcher.types";
import {Category} from "../CategoryTabs/CategoryTabs.types";
import {Product} from "../ProductListingPage/ProductListingPage.types";

interface CurrencySwitcherState {
    currentCurrency: Currency,
    currencies: Currency[],
    isExtended: boolean

}

interface CategoryTabsState {
    categories: Category[],
}

interface ProductListingPageState {
    products: Product[],
}

export interface State {
    currencySwitcher: CurrencySwitcherState,
    categoryTabs: CategoryTabsState,
    productListingPage: ProductListingPageState

}

export interface AppProps extends AppOwnProps,
    AppStateProps,
    AppDispatchProps {
}

export interface AppOwnProps {

}

export interface AppStateProps {
    categories: Category[],
}

export interface AppDispatchProps {
    dispatchInit: () => void,
}