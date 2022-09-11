import {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCart} from './MiniCart.styled';
import {MiniCartProps} from './MiniCart.types';

export class MiniCart extends PureComponent<PropsWithChildren<MiniCartProps>> {
  render() {
    return (
      <StyledMiniCart>
                MiniCART {this.props.abc && <div>adf</div>}
      </StyledMiniCart>
    );
  }
}

export default MiniCart;
