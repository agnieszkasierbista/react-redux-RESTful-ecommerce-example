import React from 'react';
import {Price, Product} from '../ProductListingPage/ProductListingPage.types';
import {Currency} from '../CurrencySwitcher/CurrencySwitcher.types';
import { ProductDetails } from './ProductDescriptionPage.types';

export function withPathname(Xyz: typeof React.Component<{ pathName: string }>) {
  return class Abc extends React.Component {
    render() {
      return (
        <Xyz {...this.props} pathName={window.location.pathname}/>
      );
    }
  };
}

export function findPrice(product: ProductDetails, currentCurrency: Currency): Price {
  return product.prices.find((price) => price.currency.label === currentCurrency.label) || {
    currency: {symbol: '$', label: 'USD'},
    amount: 0
  };
}