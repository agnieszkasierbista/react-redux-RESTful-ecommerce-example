export interface ProductDescriptionPageProps extends ProductDescriptionPageOwnProps,
    ProductDescriptionPageStateProps,
    ProductDescriptionPageDispatchProps {
}

export interface ProductDescriptionPageOwnProps {
    pathName: string;
}

export interface ProductDescriptionPageStateProps {

}

export interface ProductDescriptionPageDispatchProps {
    dispatchGetProductDetails: (id: string) => void;
}