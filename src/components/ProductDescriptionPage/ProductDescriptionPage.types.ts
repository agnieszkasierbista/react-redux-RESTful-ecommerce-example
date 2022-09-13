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
    currentCurrency: Currency,
    selected: Selected[]
}

export interface ProductDescriptionPageDispatchProps {
    dispatchGetProductDetails: (id: string) => void;
    dispatchAddToCart: (product: ProductInCart) => void;
    dispatchSelectAttr: (selected: Selected) => void;
}

export interface Selected {
    attribute: {
        id: string,
        item: {
            displayValue: string,
            value: string,
            id: string,
            selected: boolean
        }
    }
}

export interface ProductInCart extends ProductDetails {
    selected: Selected[]
}