export interface TabProps extends TabOwnProps,
    TabStateProps,
    TabDispatchProps {
}

export interface TabOwnProps {
    shouldHighlight: boolean,
    pathName: string
}

export interface TabStateProps {

}

export interface TabDispatchProps {
    dispatchSetCurrentNavigation: (path: string) => void,
}