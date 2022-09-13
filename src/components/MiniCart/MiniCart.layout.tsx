import {PropsWithChildren, PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {StyledMiniCart} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {
    return (

      this.props.isVisible && <StyledMiniCart>
        Minicart

        <Link to='/cart'>GO TO CART</Link>
      </StyledMiniCart>

    );
  }
}

export default MiniCart;
