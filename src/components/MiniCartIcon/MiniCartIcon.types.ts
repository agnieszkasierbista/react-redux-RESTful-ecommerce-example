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
}

export interface MiniCartIconDispatchProps {
}