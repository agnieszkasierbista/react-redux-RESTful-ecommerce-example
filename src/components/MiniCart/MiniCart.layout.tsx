import React, {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCart} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {
    return (

      <StyledMiniCart>
        <Cart/>
        <Link to='/cart'>
            GO TO CART
        </Link>
        <button onClick={() => console.log('Buy, buy, buy!')}>Order</button>
      </StyledMiniCart>

    );
  }
}

export default MiniCart;
