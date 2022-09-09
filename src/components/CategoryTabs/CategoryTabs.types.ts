import {Product} from "../ProductListingPage/ProductListingPage.types";

export interface CategoryTabsProps extends CategoryTabsOwnProps,
    CategoryTabsStateProps,
    CategoryTabsDispatchProps {
}

export interface CategoryTabsOwnProps {

}

export interface CategoryTabsStateProps {
   categories: Category[],
}

export interface CategoryTabsDispatchProps {

}

export type Category = {
   name: string,
   products: Product[],
}