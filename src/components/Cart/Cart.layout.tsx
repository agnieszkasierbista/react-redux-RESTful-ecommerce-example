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
  StyledProductInCartAttribute,
  StyledProductInCartAttributeName,
  StyledProductInCartAttributeValue,
  StyledProductInCartAttributeValues,
  StyledProductInCartAttributeValueText,
  StyledProductInCartCounter,
  StyledProductInCartDetailsBrand,
  StyledProductInCartDetailsName,
  StyledProductInCartPrice,
  StyledPurchaseDetails,
  StyledTitle,
  StyledTotal,
  StyledTotalValue,
  StyledValue
} from './Cart.styled';
import {findPrice, getIsSelected} from '../helpers';
import {CartLocalState, ProductInCart} from '../../types';
import {StyledCheckOutButton} from '../MiniCart/MiniCart.styled';

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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {count, ...productInCartCountRemoved} = productInCart;
            const currentPrice = findPrice(productInCart, this.props.currentCurrency);
            const uniqueKey: string = `${productInCart.name}_${productInCart.count}_${productInCart.selected.reduce((prev, {item}) => prev + item.id, '')}`;

            return (
              <StyledCartItem
                key={uniqueKey}
                isBigCart={this.props.isBigCart}
              >
                <StyledHr isBigCart={this.props.isBigCart}/>
                <StyledCartItemWrapper>
                  <StyledCartItemDetails>
                    <StyledProductInCartDetailsBrand
                      isBigCart={this.props.isBigCart}
                    >
                      {productInCart.brand}
                    </StyledProductInCartDetailsBrand>
                    <StyledProductInCartDetailsName
                      isBigCart={this.props.isBigCart}
                    >
                      {productInCart.name}
                    </StyledProductInCartDetailsName>

                    <StyledProductInCartAttribute>
                      <StyledProductInCartPrice
                        isBigCart={this.props.isBigCart}
                      >
                        {`${currentPrice.currency.symbol}${currentPrice.amount}`}
                      </StyledProductInCartPrice>
                    </StyledProductInCartAttribute>

                    {productInCart.attributes.map(attribute => {

                      if (attribute.type === 'swatch') {
                        return (
                          <StyledProductInCartAttribute key={attribute.id}>
                            <StyledProductInCartAttributeName
                              isBigCart={this.props.isBigCart}
                            >
                              {`${attribute.name}:`}
                            </StyledProductInCartAttributeName>
                            <StyledProductInCartAttributeValues
                              isBigCart={this.props.isBigCart}
                            >
                              {attribute.items.map(item => {

                                return (
                                  <StyledProductInCartAttributeValue
                                    color={item.value}
                                    key={item.id}
                                    isSelected={getIsSelected(productInCart, item, attribute)}
                                    isBigCart={this.props.isBigCart}
                                  >
                                  </StyledProductInCartAttributeValue>
                                );
                              })}
                            </StyledProductInCartAttributeValues>
                          </StyledProductInCartAttribute>

                        );
                      } else {
                        return (
                          <StyledProductInCartAttribute key={attribute.id}>
                            <StyledProductInCartAttributeName
                              isBigCart={this.props.isBigCart}
                            >
                              {`${attribute.name}:`}
                            </StyledProductInCartAttributeName>
                            <StyledProductInCartAttributeValues
                              isBigCart={this.props.isBigCart}
                            >
                              {attribute.items.map(item => {

                                return (
                                  <StyledProductInCartAttributeValue
                                    key={item.id}
                                    isSelected={getIsSelected(productInCart, item, attribute)}
                                    isBigCart={this.props.isBigCart}
                                  >
                                    <StyledProductInCartAttributeValueText
                                      isBigCart={this.props.isBigCart}
                                    >
                                      {item.value}
                                    </StyledProductInCartAttributeValueText>
                                  </StyledProductInCartAttributeValue>
                                );
                              })}
                            </StyledProductInCartAttributeValues>
                          </StyledProductInCartAttribute>
                        );
                      }
                    })}
                  </StyledCartItemDetails>

                  <StyledCartItemRightSide>
                    <StyledAdder>
                      <StyledAdderButton
                        isBigCart={this.props.isBigCart}
                        onClick={() => this.props.dispatchAddToCart(productInCartCountRemoved)}>
                        <StyledAdderButtonText
                          isBigCart={this.props.isBigCart}
                        >
                                                    +
                        </StyledAdderButtonText>
                      </StyledAdderButton>
                      <StyledProductInCartCounter
                        isBigCart={this.props.isBigCart}
                      >
                        {productInCart?.count}
                      </StyledProductInCartCounter>
                      <StyledAdderButton
                        isBigCart={this.props.isBigCart}
                        onClick={() => this.props.dispatchRemoveOneFromCart(productInCart)}>
                        <StyledAdderButtonText
                          isBigCart={this.props.isBigCart}
                        >
                                                    -
                        </StyledAdderButtonText>
                      </StyledAdderButton>
                    </StyledAdder>
                    <StyledMiniGallery
                      isBigCart={this.props.isBigCart}
                    >
                      {(productInCart.gallery.length !== 1 && this.props.isBigCart)
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

                                                <ChevronLeft src="/pictures/Vector.svg" alt="left arrow"/>

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

                                                <ChevronRight src="/pictures/Vector.svg" alt="right arrow"/>

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
        <StyledHr isBigCart={this.props.isBigCart}/>
        <StyledPurchaseDetails isBigCart={this.props.isBigCart}>
          {this.props.isBigCart
                    &&
                    <>
                      <StyledTitle>Total tax 21%: </StyledTitle><StyledValue>{this.props.currentCurrency.symbol}{totalTax}</StyledValue>
                    </>
          }

          {this.props.isBigCart
                    &&
                    <>
                      <StyledTitle>
                            Quantity:
                      </StyledTitle><StyledValue>{this.props.amount}</StyledValue>
                    </>
          }

          <StyledTotal
            isBigCart={this.props.isBigCart}
          >
                        Total:
          </StyledTotal>

          <StyledTotalValue
            isBigCart={this.props.isBigCart}
          >
            {this.props.currentCurrency.symbol}{totalCost}
          </StyledTotalValue>

          {this.props.isBigCart
                    &&
                    <StyledCheckOutButton
                      isBigCart={this.props.isBigCart}
                      onClick={() => console.log(this.props.products, 'Buy, buy, buy!')}>
                        ORDER
                    </StyledCheckOutButton>
          }
        </StyledPurchaseDetails>
      </StyledCart>
    );
  }
}

export default Cart;
