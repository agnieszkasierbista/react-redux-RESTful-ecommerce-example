import React, {PropsWithChildren, PureComponent} from 'react';
import { Link, Route } from 'react-router-dom';
import {StyledMiniCart} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {
    return (

      this.props.isVisible && <StyledMiniCart>
        Minicart
        <Cart/>
        <Link to='/cart'>GO TO CART</Link>
      </StyledMiniCart>

    );
  }
}

export default MiniCart;
