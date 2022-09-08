import {Currency} from "../CurrencySwitcher/CurrencySwitcher.types";

export interface ProductListingPageProps extends ProductListingPageOwnProps,
    ProductListingPageStateProps,
    ProductListingPageDispatchProps {
}

export interface ProductListingPageOwnProps {

}

export interface ProductListingPageStateProps {
    products: Product[],
    currentCurrency: Currency,
    // prices: Price[]
}

export type Price = { currency: { symbol: string, label: string }, amount: number }

export interface ProductListingPageDispatchProps {
   
}

export type Product = { name: string; id: string; prices: Price[]};