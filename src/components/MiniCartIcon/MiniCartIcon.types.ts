import {ProductInCart} from '../../types';

export interface MiniCartIconProps extends MiniCartIconOwnProps,
    MiniCartIconStateProps,
    MiniCartIconDispatchProps {
}

export interface MiniCartIconOwnProps {
}

export interface MiniCartIconStateProps {
    isMiniCartActive: boolean,
    amount: number,
    products: ProductInCart[],
    isVisible: boolean
}

export interface MiniCartIconDispatchProps {
    dispatchToggleMiniCartVisibility: () => void,
}