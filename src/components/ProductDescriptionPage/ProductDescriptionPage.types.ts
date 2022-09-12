import {Price} from '../ProductListingPage/ProductListingPage.types';
import {Currency} from '../CurrencySwitcher/CurrencySwitcher.types';

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
    productDetails: ProductDetails,
    currentCurrency: Currency
}

export interface ProductDescriptionPageDispatchProps {
    dispatchGetProductDetails: (id: string) => void;
}