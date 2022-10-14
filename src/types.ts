import {Category} from './components/CategoryTabs/CategoryTabs.types';

export type InitialData = [
    {categories: Category[], currencies: Currency[]},
]

export type InitialDataDirty = [
    {
        userId: number,
        id: number,
        title: string,
        body: string
    }
]

export interface Currency {
    symbol: string,
    label: string
}

export interface CurrencySwitcherState {
    currentCurrency: Currency,
    currencies: Currency[],
    isExtended: boolean
}

export interface CategoryTabsState {
    categories: Category[],
}

export type Price = { currency: Currency, amount: number }
export type Product = { name: string; id: string; prices: Price[], category: string, gallery: string[], inStock: boolean, brand: string };

export interface ProductListingPageState {
    products: Product[],
}

export interface ProductAttributeItems {
    displayValue: string,
    value: string,
    id: string
}

export interface AttributeSet {
    id: string,
    name: string,
    type: string
    items: ProductAttributeItems[]
}

export interface ProductDetails {
    productId: string,
    name: string,
    description: string,
    gallery: string[],
    brand: string,
    prices: Price[],
    attributes: AttributeSet[],
    inStock: boolean

}

export interface Selected {
    id: string,
    item: {
        displayValue: string,
        value: string,
        id: string,
        selected: boolean
    }
}

export interface ProductInCart extends ProductDetails {
    selected: Selected[],
    count?: number
}

export interface ProductDescriptionPageState {
    selected: Selected[];
    productDetails: ProductDetails
}

export interface GalleryState {
    mainPicture: string
}

export interface CartState {
    isMiniCartActive: boolean,
    products: ProductInCart[],
    isVisible: boolean,
    amount: number

}

export interface TabState {
    currentNavigation: string

}

export interface State {
    currencySwitcher: CurrencySwitcherState,
    categoryTabs: CategoryTabsState,
    productListingPage: ProductListingPageState,
    productDescriptionPage: ProductDescriptionPageState,
    gallery: GalleryState,
    cart: CartState,
    tab: TabState,
}

export interface CartLocalState {
    currentPicIdx: { [key: string]: number }
}
