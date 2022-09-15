import {ProductInCart} from '../ProductDescriptionPage/ProductDescriptionPage.types';

export interface MiniCartIconProps extends MiniCartIconOwnProps,
    MiniCartIconStateProps,
    MiniCartIconDispatchProps {
}

export interface MiniCartIconOwnProps {

}

export interface MiniCartIconStateProps {
    amount: number,
    products: ProductInCart[],
    isVisible: boolean
}

export interface MiniCartIconDispatchProps {
    dispatchToggleMiniCartVisibility: () => void,
}