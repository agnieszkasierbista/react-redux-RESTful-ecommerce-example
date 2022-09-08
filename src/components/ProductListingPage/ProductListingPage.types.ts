import {Currency} from "../CurrencySwitcher/CurrencySwitcher.types";
import {Category} from "../CategoryTabs/CategoryTabs.types";

export interface ProductListingPageProps extends ProductListingPageOwnProps,
    ProductListingPageStateProps,
    ProductListingPageDispatchProps {
}

export interface ProductListingPageOwnProps {
    categoryName: string;
}

export interface ProductListingPageStateProps {
    products: Product[],
    currentCurrency: Currency,
}

export type Price = { currency: { symbol: string, label: string }, amount: number }

export interface ProductListingPageDispatchProps {
   
}

export type Product = { name: string; id: string; prices: Price[], category: string};