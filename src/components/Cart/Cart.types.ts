import {ProductInCart} from '../ProductDescriptionPage/ProductDescriptionPage.types';
import {Currency} from '../CurrencySwitcher/CurrencySwitcher.types';

export interface CartProps extends CartOwnProps,
    CartStateProps,
    CartDispatchProps {
}

export interface CartOwnProps {

}

export interface CartStateProps {
    products: ProductInCart[],
    currentCurrency: Currency,
    amount: number
}

export interface CartDispatchProps {
    dispatchAddToCart: (product: ProductInCart) => void,
    dispatchRemoveOneFromCart: (product: ProductInCart) => void
}