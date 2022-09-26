import React, {PropsWithChildren, PureComponent} from 'react';
import {CartProps} from './Cart.types';
import {
  ChevronLeft,
  ChevronRight,
  StyledAdder,
  StyledAdderButton,
  StyledAdderButtonText,
  StyledArrow,
  StyledArrows,
  StyledCart,
  StyledCartHeader,
  StyledCartItem,
  StyledCartItemDetails,
  StyledCartItemRightSide,
  StyledCartItemWrapper,
  StyledHr,
  StyledMiniGallery,
  StyledPic,
  StyledProductInCartCounter,
  StyledPurchaseDetails,
  StyledTitle,
  StyledTotal,
  StyledValue
} from './Cart.styled';
import {
  StyledAddToCartButton,
  StyledAttribute,
  StyledAttributeName,
  StyledAttributeValue,
  StyledAttributeValues,
  StyledAttributeValueText,
  StyledProductDetailsBrand,
  StyledProductDetailsName,
  StyledProductPrice
} from '../ProductDescriptionPage/ProductDescriptionPage.styled';
import {findPrice, getIsSelected} from '../helpers';
import {CartLocalState, ProductInCart} from '../../types';

const tax = 0.21;

export class Cart extends PureComponent<PropsWithChildren<CartProps>> {

    state: CartLocalState = {
      currentPicIdx: {}
    };

    render() {

      const totalCost: string = this.props.products.map((product: ProductInCart) => {
        const currentPrice = findPrice(product, this.props.currentCurrency);
        const productQuantity = product.count;
        const currentUnitPrice = (currentPrice)?.amount || 0;
        return currentUnitPrice * (productQuantity || 0);
      })
        .reduce((prev, curr) => prev + curr, 0).toFixed(2);

      const totalTax = (parseFloat(totalCost) * tax).toFixed(2);

      return (
        <StyledCart isBigCart={this.props.isBigCart}>
          {this.props.isBigCart && <StyledCartHeader>CART</StyledCartHeader>}
          {
            this.props.products.map((productInCart: ProductInCart) => {
              const {count, ...productInCartCountRemoved} = productInCart;
              const currentPrice = findPrice(productInCart, this.props.currentCurrency);
              const uniqueKey: string = `${productInCart.name}_${productInCart.count}_${productInCart.selected.reduce((prev, {item}) => prev + item.id, '')}`;

              return (
                <StyledCartItem
                  key={uniqueKey}
                >
                  <StyledHr/>
                  <StyledCartItemWrapper>
                    <StyledCartItemDetails>
                      <StyledProductDetailsBrand>{productInCart.brand}</StyledProductDetailsBrand>
                      <StyledProductDetailsName>{productInCart.name}</StyledProductDetailsName>

                      <StyledAttribute>
                        <StyledProductPrice>{`${currentPrice.currency.symbol} ${currentPrice.amount}`}</StyledProductPrice>
                      </StyledAttribute>

                      {productInCart.attributes.map(attribute => {

                        if (attribute.type === 'swatch') {
                          return (
                            <StyledAttribute key={attribute.id}>
                              <StyledAttributeName>
                                {`${attribute.name}:`}
                              </StyledAttributeName>
                              <StyledAttributeValues>
                                {attribute.items.map(item => {

                                  return (
                                    <StyledAttributeValue
                                      color={item.value}
                                      key={item.id}
                                      isSelected={getIsSelected(productInCart, item, attribute)}
                                    >
                                    </StyledAttributeValue>
                                  );
                                })}
                              </StyledAttributeValues>
                            </StyledAttribute>

                          );
                        } else {
                          return (
                            <StyledAttribute key={attribute.id}>
                              <StyledAttributeName>
                                {`${attribute.name}:`}
                              </StyledAttributeName>
                              <StyledAttributeValues>
                                {attribute.items.map(item => {

                                  return (
                                    <StyledAttributeValue
                                      key={item.id}
                                      isSelected={getIsSelected(productInCart, item, attribute)}
                                    >
                                      <StyledAttributeValueText>
                                        {item.value}
                                      </StyledAttributeValueText>
                                    </StyledAttributeValue>
                                  );
                                })}
                              </StyledAttributeValues>
                            </StyledAttribute>
                          );
                        }
                      })}
                    </StyledCartItemDetails>
                    <StyledCartItemRightSide>
                      <StyledAdder>
                        <StyledAdderButton
                          onClick={() => this.props.dispatchAddToCart(productInCartCountRemoved)}>
                          <StyledAdderButtonText>
                          +
                          </StyledAdderButtonText>
                        </StyledAdderButton>
                        <StyledProductInCartCounter>{productInCart?.count}</StyledProductInCartCounter>
                        <StyledAdderButton
                          onClick={() => this.props.dispatchRemoveOneFromCart(productInCart)}>
                          <StyledAdderButtonText>
                         -
                          </StyledAdderButtonText>
                        </StyledAdderButton>
                      </StyledAdder>
                      <StyledMiniGallery>
                        {(productInCart.gallery.length !== 1)
                                        &&
                                        <StyledArrows>
                                          <StyledArrow
                                            onClick={() => {
                                              this.setState((prev: CartLocalState) => {

                                                return {
                                                  ...prev,
                                                  currentPicIdx: {
                                                    ...prev.currentPicIdx, [uniqueKey]: (
                                                      prev.currentPicIdx[uniqueKey]
                                                        ? (prev.currentPicIdx[uniqueKey] - 1)
                                                        : productInCart.gallery.length - 1)
                                                  }
                                                };
                                              });
                                            }}
                                          >

                                            <ChevronLeft src="/pictures/Vector.svg"/>

                                          </StyledArrow>
                                          <StyledArrow
                                            onClick={() => {
                                              this.setState((prev: CartLocalState) => {

                                                return {
                                                  ...prev,
                                                  currentPicIdx: {
                                                    ...prev.currentPicIdx, [uniqueKey]: (
                                                      prev.currentPicIdx[uniqueKey]
                                                        ?
                                                        prev.currentPicIdx[uniqueKey] === productInCart.gallery.length - 1
                                                          ? 0
                                                          : (prev.currentPicIdx[uniqueKey] + 1)
                                                        : 1)
                                                  }
                                                };
                                              });
                                            }}
                                          >

                                            <ChevronRight src="/pictures/Vector.svg"/>

                                          </StyledArrow>
                                        </StyledArrows>}
                        <StyledPic
                          picIdx={this.state.currentPicIdx[uniqueKey] || 0}
                          pics={productInCart.gallery}/>
                      </StyledMiniGallery>
                    </StyledCartItemRightSide>
                  </StyledCartItemWrapper>


                </StyledCartItem>
              );
            })
          }
          <StyledHr/>
          <StyledPurchaseDetails>
            {this.props.isBigCart && <><StyledTitle>Total tax 21%: </StyledTitle><StyledValue>{this.props.currentCurrency.symbol}{totalTax}</StyledValue></>}
            {this.props.isBigCart && <><StyledTitle>Quantity: </StyledTitle><StyledValue>{this.props.amount}</StyledValue></>}
            <StyledTotal>Total: </StyledTotal><StyledValue>{this.props.currentCurrency.symbol}{totalCost}</StyledValue>
            {this.props.isBigCart &&
            <StyledAddToCartButton onClick={() => console.log(this.props.products, 'Buy, buy, buy!')}>ORDER</StyledAddToCartButton>}
          </StyledPurchaseDetails>
        </StyledCart>
      );
    }
}

export default Cart;
