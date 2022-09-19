import {ProductInCart} from '../../types';

export interface MiniCartIconProps extends MiniCartIconOwnProps,
    MiniCartIconStateProps,
    MiniCartIconDispatchProps {
}

export interface MiniCartIconOwnProps {
    pathName: string
}

export interface MiniCartIconStateProps {
    amount: number,
    products: ProductInCart[],
    isVisible: boolean
}

export interface MiniCartIconDispatchProps {
    dispatchToggleMiniCartVisibility: () => void,
}