import React, {PropsWithChildren, PureComponent} from 'react';
import {ProductListingPageProps} from './ProductListingPage.types';
import {
  StyledAddToCartShorthand,
  StyledAddToCartShorthandIcon, StyledBrandAndName,
  StyledOutOfStock,
  StyledPLPitem,
  StyledPLPoutOfStockItem, StyledPrice,
  StyledProductListingPage,
  StyledProductListingPageImg, StyledProductListingPageItemDetails,
  StyledProductListingPageOutOfStockImg,
  StyledProductListingPageTitle
} from './ProductListingPage.styled';
import {Link} from 'react-router-dom';
import {getProductDescriptionPageLink} from '../helpers';


export class ProductListingPage extends PureComponent<PropsWithChildren<ProductListingPageProps>> {

  render() {

    return (
      <StyledProductListingPage>
        <StyledProductListingPageTitle>
          <h2>{this.props.categoryName}</h2>
        </StyledProductListingPageTitle>
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
                  <StyledProductListingPageItemDetails>
                    <StyledBrandAndName>{`${product.brand} ${product.name}`}</StyledBrandAndName>
                    <StyledPrice>{`${price?.currency.symbol} ${price?.amount}`}</StyledPrice>
                  </StyledProductListingPageItemDetails>
                </Link>
                <StyledAddToCartShorthand onClick={() => this.props.dispatchAddToCartByProductId(product.id)}>
                  <StyledAddToCartShorthandIcon src="/pictures/Empty Cart.svg" alt="empty cart icon"/>
                </StyledAddToCartShorthand>
              </StyledPLPitem>
            );
          } else {
            return (
              <StyledPLPoutOfStockItem key={product.id}>
                <Link to={getProductDescriptionPageLink(product.category, product.id)}>
                  <StyledProductListingPageOutOfStockImg imgSrc={product.gallery[0]}>
                    <StyledOutOfStock>OUT OF STOCK</StyledOutOfStock>
                  </StyledProductListingPageOutOfStockImg>
                  <StyledProductListingPageItemDetails>
                    <StyledBrandAndName>{`${product.brand} ${product.name}`}</StyledBrandAndName>
                    <StyledPrice>{`${price?.currency.symbol} ${price?.amount}`}</StyledPrice>
                  </StyledProductListingPageItemDetails>
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