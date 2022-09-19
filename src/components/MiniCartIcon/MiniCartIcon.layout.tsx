import {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCartIcon, StyledQuantityBadge} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';
import MiniCart from '../MiniCart/MiniCart';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <StyledMiniCartIcon onMouseOver={() => {
        if(this.props.pathName !== '/cart' &&  !this.props.isVisible) {
          this.props.dispatchToggleMiniCartVisibility();
        }
      }}>
                    MiniCartIcon <StyledQuantityBadge>{this.props.amount !== 0 ? this.props.amount : null}</StyledQuantityBadge>
        <MiniCart />
      </StyledMiniCartIcon>
    );
  }
}

export default MiniCartIcon;
