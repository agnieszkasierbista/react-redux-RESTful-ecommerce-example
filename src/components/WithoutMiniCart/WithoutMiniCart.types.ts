export interface WithoutMiniCartProps extends WithoutMiniCartOwnProps,
    WithoutMiniCartStateProps,
    WithoutMiniCartDispatchProps {
}

export interface WithoutMiniCartOwnProps {
}

export interface WithoutMiniCartStateProps {

}


export interface WithoutMiniCartDispatchProps {
    dispatchSetMiniCartState: (isActive: boolean) => void
}

