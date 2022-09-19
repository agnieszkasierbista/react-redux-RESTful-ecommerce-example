import {
  ProductDetails,
  ProductInCart,
  Selected
} from './components/ProductDescriptionPage/ProductDescriptionPage.types';
import {Currency} from './components/CurrencySwitcher/CurrencySwitcher.types';
import {Category} from './components/CategoryTabs/CategoryTabs.types';
import {Product} from './components/ProductListingPage/ProductListingPage.types';

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

export interface CartLocalState {
    currentPicIdx: { [key: string]: number }
}