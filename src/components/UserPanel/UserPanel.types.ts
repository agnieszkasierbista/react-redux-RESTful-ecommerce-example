export interface UserPanelProps extends UserPanelOwnProps,
    UserPanelStateProps,
    UserPanelDispatchProps {
}

export interface UserPanelOwnProps {

}

export interface UserPanelStateProps {
    isUserPanelExtended: boolean,
}

export interface UserPanelDispatchProps {
    dispatchToggleIsUserPanelExtended: () => void,
}

