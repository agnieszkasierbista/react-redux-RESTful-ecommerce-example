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
    products: Product[],
    currentCurrency: Currency,
}

export interface ProductListingPageDispatchProps {
   dispatchAddToCart: (product: ProductInCart) => void,
   dispatchAddToCartByProductId: (productId: string) => void
}

