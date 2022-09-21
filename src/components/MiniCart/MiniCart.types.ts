export interface MiniCartProps extends MiniCartOwnProps,
    MiniCartStateProps,
    MiniCartDispatchProps {
}

export interface MiniCartOwnProps {

}

export interface MiniCartStateProps {
    isVisible: boolean,
    amount: number

}

export interface MiniCartDispatchProps {
    dispatchToggleMiniCartVisibility: () => void
}