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
import {getIsSelected} from '../helpers';
import {CartLocalState} from '../../types';

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
        <StyledCart>
          {
            this.props.products.map((productInCart: ProductInCart) => {
              const {count, ...productInCartCountRemoved} = productInCart;
              const currentPrice = findPrice(productInCart, this.props.currentCurrency);
              const uniqueKey: string = `${productInCart.name}_${productInCart.count}_${productInCart.selected.reduce((prev, {item}) => prev + item.id, '')}`;

              return (
                <StyledCartItem
                  key={uniqueKey}
                >
                  <StyledCartItemDetails>
                    <section><p>{productInCart.brand}</p></section>
                    <section><p>{productInCart.name}</p></section>

                    <section>
                      <p>Price:</p>
                      <p>{`${currentPrice.currency.symbol} ${currentPrice.amount}`}</p>
                    </section>

                    {productInCart.attributes.map(attribute => {

                      if (attribute.type === 'swatch') {
                        return (
                          <section key={attribute.id}>
                            <div>
                              <p>{`${attribute.name}:`}</p>
                            </div>
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

                                return (
                                  <StyledAttributeValue
                                    key={item.id}
                                    isSelected={getIsSelected(productInCart, item, attribute)}
                                  >
                                    {item.displayValue}
                                  </StyledAttributeValue>
                                );
                              })}
                            </StyledAttributeValues>
                          </section>
                        );
                      }
                    })}
                  </StyledCartItemDetails>
                  <StyledAdder>
                    <StyledAdderButton
                      onClick={() => this.props.dispatchAddToCart(productInCartCountRemoved)}>
                                        +
                    </StyledAdderButton>
                    <div>{productInCart?.count}</div>
                    <StyledAdderButton
                      onClick={() => this.props.dispatchRemoveOneFromCart(productInCart)}>
                                        -
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

                                        {'<'}

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

                                        {'>'}
                                          
                                      </StyledArrow>
                                    </StyledArrows>}
                    <StyledPic
                      picIdx={this.state.currentPicIdx[uniqueKey] || 0}
                      pics={productInCart.gallery}/>
                  </StyledMiniGallery>
                </StyledCartItem>
              );
            })
          }
          <StyledPurchaseDetails>
            {this.props.isBigCart && <p>Total tax 21%: {this.props.currentCurrency.symbol}{totalTax}</p>}
            {this.props.isBigCart && <p>Quantity: {this.props.amount}</p>}
            <p>Total: {this.props.currentCurrency.symbol}{totalCost}</p>
          </StyledPurchaseDetails>
          {this.props.isBigCart &&
                <button onClick={() => console.log(this.props.products, 'Buy, buy, buy!')}>ORDER</button>}
        </StyledCart>
      );
    }
}

export default Cart;
