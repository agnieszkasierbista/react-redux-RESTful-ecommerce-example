import React, {PropsWithChildren, PureComponent} from 'react';
import {CartProps} from './Cart.types';
import {StyledAdder, StyledArrow, StyledArrows, StyledCart, StyledCartItem, StyledMiniGallery} from './Cart.styled';
import {ProductInCart} from '../ProductDescriptionPage/ProductDescriptionPage.types';
import {findPrice} from '../ProductDescriptionPage/helpers';
import {StyledAttributeValue, StyledAttributeValues} from '../ProductDescriptionPage/ProductDescriptionPage.styled';

export class Cart extends PureComponent<PropsWithChildren<CartProps>> {
  render() {
    return (
      <StyledCart>
        {
          this.props.products.map((productInCart: ProductInCart) => {

            const currentPrice = findPrice(productInCart, this.props.currentCurrency);

            return (
              <StyledCartItem
                key={productInCart.productId}
              >
                <section>
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
                </section>
                <StyledAdder>
                  <div>+</div>
                  <div>AMOUNT</div>
                  <div>-</div>
                </StyledAdder>
                <StyledMiniGallery
                  // pics={productInCart.gallery}
                >
                  <StyledArrows>
                    <StyledArrow>{'<'}</StyledArrow>
                    <StyledArrow>{'>'}</StyledArrow>
                  </StyledArrows>


                </StyledMiniGallery>
              </StyledCartItem>
            );
          })
        }
      </StyledCart>
    );
  }
}

export default Cart;
