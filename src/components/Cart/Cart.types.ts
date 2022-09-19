import {Currency, ProductInCart} from '../../types';

export interface CartProps extends CartOwnProps,
    CartStateProps,
    CartDispatchProps {
}

export interface CartOwnProps {
    isBigCart: boolean
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