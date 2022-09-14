import {Currency} from '../CurrencySwitcher/CurrencySwitcher.types';
import {Category} from '../CategoryTabs/CategoryTabs.types';
import {Product} from '../ProductListingPage/ProductListingPage.types';
import {ProductDetails, ProductInCart, Selected} from '../ProductDescriptionPage/ProductDescriptionPage.types';

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

interface ProductDescriptionPageState {
    selected: Selected[];
    productDetails: ProductDetails
}


interface GalleryState {
    mainPicture: string
}

interface CartState {
    products: ProductInCart[],
    isVisible: boolean,
    amount: number

}

export interface State {
    currencySwitcher: CurrencySwitcherState,
    categoryTabs: CategoryTabsState,
    productListingPage: ProductListingPageState,
    productDescriptionPage: ProductDescriptionPageState,
    gallery: GalleryState,
    cart: CartState,
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