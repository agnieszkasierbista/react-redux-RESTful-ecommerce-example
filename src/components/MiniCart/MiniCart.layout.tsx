import React, {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCart, StyledMiniCartOverlay} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {
    return (

      this.props.isVisible && <StyledMiniCart>
        <StyledMiniCartOverlay
          isVisible={this.props.isVisible}
          onClick={() => this.props.dispatchToggleMiniCartVisibility()}/>
        <Cart/>
        <Link
          to='/cart'
          onClick={() => this.props.dispatchToggleMiniCartVisibility()}>
            GO TO CART
        </Link>
      </StyledMiniCart>

    );
  }
}

export default MiniCart;
