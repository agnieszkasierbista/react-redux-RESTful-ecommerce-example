import {PropsWithChildren, PureComponent} from 'react';
import {ProductListingPageProps} from './ProductListingPage.types';
import {StyledPLPitem, StyledProductListingPage, StyledProductListingPageImg} from './ProductListingPage.styled';
import {Link} from 'react-router-dom';
import {getProductDescriptionPageLink} from '../helpers';
import React from 'react';


export class ProductListingPage extends PureComponent<PropsWithChildren<ProductListingPageProps>> {
  render() {
    return (
      <StyledProductListingPage>
        {this.props.products.filter((product) => {
          return this.props.shouldInclude(product);
        }).map(product => {

          const price = product.prices.find(
            (price) => {
              return price.currency.label === this.props.currentCurrency.label;
            }
          );
          return (
            <StyledPLPitem key={product.id}>
              <Link to={getProductDescriptionPageLink(product.category, product.id)}>
                <StyledProductListingPageImg imgSrc={product.gallery[0]}/>
                <p>{product.name}</p>
                <p>
                                        Price goes here: {price?.currency.symbol} {price?.amount}
                </p>
              </Link>
              <div>
                                    CART ICON
              </div>
            </StyledPLPitem>
          );
        }
        )}
      </StyledProductListingPage>
    );
  }
}

export default ProductListingPage;