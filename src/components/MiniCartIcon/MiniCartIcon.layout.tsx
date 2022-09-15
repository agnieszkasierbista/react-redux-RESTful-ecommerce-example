import {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCartIcon} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';
import MiniCart from '../MiniCart/MiniCart';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <StyledMiniCartIcon>
        <Link to='/cart'>
            MiniCartIcon {this.props.amount !== 0 ? this.props.amount : null}
        </Link>
        <MiniCart />
      </StyledMiniCartIcon>
    );
  }
}

export default MiniCartIcon;
