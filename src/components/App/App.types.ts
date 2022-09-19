import {Category} from '../CategoryTabs/CategoryTabs.types';

export interface AppProps extends AppOwnProps,
    AppStateProps,
    AppDispatchProps {
}

export interface AppOwnProps {

}

export interface AppStateProps {
    categories: Category[],
}

export interface AppDispatchProps {
    dispatchInit: () => void,
}