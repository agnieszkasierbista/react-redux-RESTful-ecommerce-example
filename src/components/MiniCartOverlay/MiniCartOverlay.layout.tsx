import React, {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCartOverlay} from './MiniCartOverlay.styled';
import {MiniCartOverlayProps} from './MiniCartOverlay.types';

export class MiniCartOverlay extends PureComponent<PropsWithChildren<MiniCartOverlayProps>> {
  render() {

    return (
      this.props.isMiniCartVisible && <StyledMiniCartOverlay onClick={() => this.props.dispatchToggleMiniCartVisibility()}/>
    );
  }
}

export default MiniCartOverlay;
