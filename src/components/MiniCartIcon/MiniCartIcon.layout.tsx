import {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCartIcon, StyledMiniCartIconContainer, StyledQuantityBadge} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <StyledMiniCartIconContainer onClick={() => {
        if (this.props.isMiniCartActive && !this.props.isVisible) {
          this.props.dispatchToggleMiniCartVisibility();
        }
      }}>
        {this.props.amount ? <StyledQuantityBadge>{this.props.amount !== 0 ? this.props.amount : null}</StyledQuantityBadge> : null}
        <StyledMiniCartIcon src="/pictures/Empty Cart.svg" alt="empty cart icon"/>
      </StyledMiniCartIconContainer>
    );
  }
}

export default MiniCartIcon;
