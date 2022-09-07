export interface ProductListingPageProps extends ProductListingPageOwnProps,
    ProductListingPageStateProps,
    ProductListingPageDispatchProps {
}

export interface ProductListingPageOwnProps {

}

export interface ProductListingPageStateProps {
    products: Product[]
}

export interface ProductListingPageDispatchProps {
   
}

export type Product = {[key: string]: string};