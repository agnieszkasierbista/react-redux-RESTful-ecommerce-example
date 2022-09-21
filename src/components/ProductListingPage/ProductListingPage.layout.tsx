import React, {PropsWithChildren, PureComponent} from 'react';
import {ProductListingPageProps} from './ProductListingPage.types';
import {
  StyledAddToCartShorthand,
  StyledPLPitem,
  StyledPLPoutOfStockItem,
  StyledProductListingPage,
  StyledProductListingPageImg,
  StyledProductListingPageOutOfStockImg
} from './ProductListingPage.styled';
import {Link} from 'react-router-dom';
import {getProductDescriptionPageLink} from '../helpers';


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
          if (product.inStock) {
            return (
              <StyledPLPitem key={product.id}>
                <Link to={getProductDescriptionPageLink(product.category, product.id)}>
                  <StyledProductListingPageImg imgSrc={product.gallery[0]}/>
                  <p>{`${product.brand} ${product.name}`}</p>
                  <p>{`${price?.currency.symbol} ${price?.amount}`}</p>
                </Link>
                <StyledAddToCartShorthand onClick={() => this.props.dispatchAddToCartByProductId(product.id)}>
                  <img src="../pictures/Empty Cart.svg" alt="empty cart icon"/>
                </StyledAddToCartShorthand>
              </StyledPLPitem>
            );
          } else {
            return (
              <StyledPLPoutOfStockItem key={product.id}>
                <Link to={getProductDescriptionPageLink(product.category, product.id)}>
                  <StyledProductListingPageOutOfStockImg imgSrc={product.gallery[0]}>
                    OUT OF STOCK
                  </StyledProductListingPageOutOfStockImg>
                  <p>{`${product.brand} ${product.name}`}</p>
                  <p>{`${price?.currency.symbol} ${price?.amount}`}</p>
                </Link>
              </StyledPLPoutOfStockItem>
            );
          }
        }
        )}
      </StyledProductListingPage>
    );
  }
}

export default ProductListingPage;