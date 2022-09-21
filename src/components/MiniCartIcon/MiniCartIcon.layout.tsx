import {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCartIcon, StyledMiniCartIconContainer, StyledQuantityBadge} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';
import MiniCart from '../MiniCart/MiniCart';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <StyledMiniCartIconContainer onMouseOver={() => {
        if (this.props.pathName !== '/cart' && !this.props.isVisible) {
          this.props.dispatchToggleMiniCartVisibility();
        }
      }}>
        {this.props.amount ? <StyledQuantityBadge>{this.props.amount !== 0 ? this.props.amount : null}</StyledQuantityBadge> : null}
        <StyledMiniCartIcon src="../pictures/Empty Cart.svg" alt="empty cart icon"/>
        <MiniCart/>
      </StyledMiniCartIconContainer>
    );
  }
}

export default MiniCartIcon;
