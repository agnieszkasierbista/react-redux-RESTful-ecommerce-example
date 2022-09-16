import React, {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCart} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {

    return (
      this.props.isVisible && <StyledMiniCart onMouseLeave={() => this.props.dispatchToggleMiniCartVisibility()}>
        <Cart isBigCart={false}/>
        <div>
          <Link
            to='/cart'
            onClick={() => this.props.dispatchToggleMiniCartVisibility()}>
                GO TO CART
          </Link>
          <button onClick={() => console.log('Buy, buy, buy!')}>CheckOut</button>
        </div>
      </StyledMiniCart>
    );
  }
}

export default MiniCart;
