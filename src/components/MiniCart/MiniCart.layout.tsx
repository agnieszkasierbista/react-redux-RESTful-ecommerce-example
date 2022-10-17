import React, {PropsWithChildren, PureComponent} from 'react';
import {
  StyledButtonsInMiniCart,
  StyledButtonText,
  StyledCheckOutButton,
  StyledGoToCart,
  StyledMiniCart,
  StyledMiniCartTitle,
  StyledMyBagHeader,
  StyledMyBagHeaderAmount
} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {

    return (
      this.props.isVisible
            &&
            <StyledMiniCart>
              <StyledMiniCartTitle>
                <StyledMyBagHeader>Your cart contains </StyledMyBagHeader><StyledMyBagHeaderAmount>{this.props.amount < 1 ? null : this.props.amount} {this.props.amount > 1 ? 'items' : this.props.amount < 1 ? 'no items' : 'item'}</StyledMyBagHeaderAmount>
              </StyledMiniCartTitle>
              <Cart isBigCart={false}/>
              <StyledButtonsInMiniCart>
                <StyledGoToCart
                  to='/cart'
                  onClick={() => {
                    this.props.dispatchToggleMiniCartVisibility();
                  }}>
                        GO TO CART
                </StyledGoToCart>
                <StyledCheckOutButton onClick={() => console.log('Buy, buy, buy!')}>
                  <StyledButtonText>CHECK OUT</StyledButtonText>
                </StyledCheckOutButton>
              </StyledButtonsInMiniCart>
            </StyledMiniCart>
    );
  }
}

export default MiniCart;
