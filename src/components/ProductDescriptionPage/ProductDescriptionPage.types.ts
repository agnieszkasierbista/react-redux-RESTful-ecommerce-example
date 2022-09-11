import {Price} from '../ProductListingPage/ProductListingPage.types';

export interface ProductDescriptionPageProps extends ProductDescriptionPageOwnProps,
    ProductDescriptionPageStateProps,
    ProductDescriptionPageDispatchProps {
}

export interface ProductDescriptionPageOwnProps {
    pathName: string;
}

export interface ProductAttributeItems {
    displayValue: string,
    value: string,
    id: string
}
export interface AttributeSet {

    id: string,
    name: string,
    type: string
    items: ProductAttributeItems[]
}

export interface ProductDetails {
    productId: string,
    name: string,
    description: string,
    gallery: string[],
    brand: string,
    prices: Price[],
    attributes: AttributeSet[]

}

export interface ProductDescriptionPageStateProps {
    productDetails: ProductDetails
}

export interface ProductDescriptionPageDispatchProps {
    dispatchGetProductDetails: (id: string) => void;
}