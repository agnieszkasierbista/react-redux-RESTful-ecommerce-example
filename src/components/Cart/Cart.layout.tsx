import React, {PropsWithChildren, PureComponent} from 'react';
import {CartProps} from './Cart.types';
import {
  StyledAdder,
  StyledAdderButton,
  StyledArrow,
  StyledArrows,
  StyledCart,
  StyledCartItem,
  StyledCartItemDetails,
  StyledMiniGallery,
  StyledPic,
  StyledPurchaseDetails
} from './Cart.styled';
import {ProductInCart} from '../ProductDescriptionPage/ProductDescriptionPage.types';
import {findPrice} from '../ProductDescriptionPage/helpers';
import {StyledAttributeValue, StyledAttributeValues} from '../ProductDescriptionPage/ProductDescriptionPage.styled';

export class Cart extends PureComponent<PropsWithChildren<CartProps>> {

    state = {
      currentPicIdx: 0
    };

    render() {

      const totalCost: string = this.props.products.map((product) => {

        const currentPrice = product.prices.find((price) => price.currency.label === this.props.currentCurrency.label);

        const productQuantity = product.count;

        const currentUnitPrice = (currentPrice)?.amount || 0;

        return currentUnitPrice * (productQuantity || 0);

      })
        .reduce((prev, curr) => prev + curr, 0).toFixed(2);

      const totalTax = (parseFloat(totalCost) * 0.21).toFixed(2);

      return (
        <StyledCart>
          {
            this.props.products.map((productInCart: ProductInCart) => {

              const {count: _, ...productInCartCountRemoved} = productInCart;

              const currentPrice = findPrice(productInCart, this.props.currentCurrency);

              console.log('productInCart', productInCart);

              return (
                <StyledCartItem
                  key={`${productInCart.name}_${productInCart.count}_${productInCart.selected.reduce((prev, {item}) => prev + item.id, '')}`}
                >
                  <StyledCartItemDetails>
                    <section>{productInCart.brand}</section>
                    <section>{productInCart.name}</section>

                    <section>
                      <p>Price:</p>
                      <p>{`${currentPrice.currency.symbol} ${currentPrice.amount}`}</p>
                    </section>

                    {productInCart.attributes.map(attribute => {

                      if (attribute.id === 'Color') {
                        return (
                          <section key={attribute.id}>
                            <div>
                              <p>{`${attribute.name}:`}</p>
                            </div>
                            <StyledAttributeValues>
                              {attribute.items.map(item => {

                                const selectedAttr = {
                                  id: attribute.id,
                                  item: {
                                    displayValue: item.displayValue,
                                    value: item.value,
                                    id: item.id,
                                    selected: true
                                  }
                                };

                                return <StyledAttributeValue
                                  color={item.value}
                                  key={item.id}
                                >
                                </StyledAttributeValue>;
                              })}
                            </StyledAttributeValues>
                          </section>
                        );
                      } else {
                        return (
                          <section key={attribute.id}>
                            <div>
                              <p>{`${attribute.name}:`}</p>
                            </div>
                            <StyledAttributeValues>
                              {attribute.items.map(item => {

                                const selectedAttr = {
                                  id: attribute.id,
                                  item: {
                                    displayValue: item.displayValue,
                                    value: item.value,
                                    id: item.id,
                                    selected: true
                                  }
                                };

                                return <StyledAttributeValue
                                  key={item.id}
                                >
                                  {item.displayValue}
                                </StyledAttributeValue>;
                              })}
                            </StyledAttributeValues>
                          </section>
                        );
                      }
                    })}
                  </StyledCartItemDetails>
                  <StyledAdder>
                    <StyledAdderButton
                      onClick={() => this.props.dispatchAddAnotherToCart(productInCartCountRemoved)}>+</StyledAdderButton>
                    <div>{productInCart?.count}</div>
                    <StyledAdderButton
                      onClick={() => this.props.dispatchRemoveOneFromCart(productInCart)}>-</StyledAdderButton>
                  </StyledAdder>
                  <StyledMiniGallery>
                    <StyledArrows>
                      <StyledArrow onClick={() => {
                        this.setState((prev: any) => {
                          if (prev.currentPicIdx === 0) {
                            return {
                              ...prev,
                              currentPicIdx: productInCart.gallery.length - 1
                            };
                          } else {
                            return {
                              ...prev,
                              currentPicIdx: prev.currentPicIdx - 1
                            };
                          }
                        });


                      }}>{'<'}</StyledArrow>
                      <StyledArrow onClick={() => {

                        this.setState((prev: any) => {
                          if (prev.currentPicIdx === productInCart.gallery.length - 1) {
                            return {
                              ...prev,
                              currentPicIdx: 0
                            };
                          } else {
                            return {
                              ...prev,
                              currentPicIdx: prev.currentPicIdx + 1
                            };
                          }
                        });
                      }}>{'>'}</StyledArrow>
                    </StyledArrows>
                    <StyledPic picIdx={this.state.currentPicIdx}
                      pics={productInCart.gallery}></StyledPic>

                  </StyledMiniGallery>
                </StyledCartItem>
              );
            })
          }
          <StyledPurchaseDetails>
            <p>Total tax 21%: {this.props.currentCurrency.symbol}{totalTax}</p>
            <p>Quantity: {this.props.amount}</p>
            <p>Total: {this.props.currentCurrency.symbol}{totalCost}</p>
          </StyledPurchaseDetails>
        </StyledCart>
      );
    }
}

export default Cart;
