import {toggleMiniCartVisibility} from '../../actions';

export interface MiniCartIconProps extends MiniCartIconOwnProps,
    MiniCartIconStateProps,
    MiniCartIconDispatchProps {
}

export interface MiniCartIconOwnProps {

}

export interface MiniCartIconStateProps {
    amount: number
}

export interface MiniCartIconDispatchProps {
    dispatchToggleMiniCartVisibility: () => void
}