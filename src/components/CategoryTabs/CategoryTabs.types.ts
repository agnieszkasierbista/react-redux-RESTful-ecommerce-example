import {Product} from '../../types';

export interface CategoryTabsProps extends CategoryTabsOwnProps,
    CategoryTabsStateProps,
    CategoryTabsDispatchProps {
}

export interface CategoryTabsOwnProps {

}

export interface CategoryTabsStateProps {
   categories: Category[],
   currentNavigation: string
}

export interface CategoryTabsDispatchProps {

}

export type Category = {
   name: string,
   products: Product[],
}
