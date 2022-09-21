import React, {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCart, StyledMiniCartTitle} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';
import Cart from '../Cart/Cart';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {

    return (
      this.props.isVisible
            &&
            <StyledMiniCart onMouseLeave={() => this.props.dispatchToggleMiniCartVisibility()}>
              <StyledMiniCartTitle>
                <p><b>My bag</b>, {this.props.amount < 1 ? null : this.props.amount} {this.props.amount > 1 ? 'items' : this.props.amount < 1 ? 'no items' : 'item'}</p>
              </StyledMiniCartTitle>
              <Cart isBigCart={false}/>
              <div>
                <Link
                  to='/cart'
                  onClick={() => this.props.dispatchToggleMiniCartVisibility()}>
                        GO TO CART
                </Link>
                <button onClick={() => console.log('Buy, buy, buy!')}>
                        CheckOut
                </button>
              </div>
            </StyledMiniCart>
    );
  }
}

export default MiniCart;
