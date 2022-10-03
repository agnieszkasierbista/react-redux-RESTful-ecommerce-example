import {Currency, Product, ProductInCart} from '../../types';

export interface ProductListingPageProps extends ProductListingPageOwnProps,
    ProductListingPageStateProps,
    ProductListingPageDispatchProps {
}

export interface ProductListingPageOwnProps {
    shouldInclude: (product: Product) => boolean;
    categoryName: string;
}

export interface ProductListingPageStateProps {
    pathName: string,
    products: Product[],
    currentCurrency: Currency,
}

export interface ProductListingPageDispatchProps {
    dispatchGetProductsList: (pathName: string) => void,
    dispatchAddToCart: (product: ProductInCart) => void,
    dispatchAddToCartByProductId: (productId: string) => void
}

