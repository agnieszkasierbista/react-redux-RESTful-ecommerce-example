import {Currency, ProductDetails, ProductInCart, Selected} from '../../types';

export interface ProductDescriptionPageProps extends ProductDescriptionPageOwnProps,
    ProductDescriptionPageStateProps,
    ProductDescriptionPageDispatchProps {
}

export interface ProductDescriptionPageOwnProps {
    pathName: string;
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
    dispatchClearSelectedAttributes: () => void;
}

