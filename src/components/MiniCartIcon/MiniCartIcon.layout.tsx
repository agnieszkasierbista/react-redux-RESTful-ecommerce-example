import {PropsWithChildren, PureComponent} from 'react';
import {StyledMiniCartIcon} from './MiniCartIcon.styled';
import { MiniCartIconProps } from './MiniCartIcon.types';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <StyledMiniCartIcon>
                MiniCartIcon
      </StyledMiniCartIcon>
    );
  }
}

export default MiniCartIcon;
