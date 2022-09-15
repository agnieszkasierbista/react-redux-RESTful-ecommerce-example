import {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCartIcon} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <Link to='/cart' onClick={() => this.props.dispatchToggleMiniCartVisibility()}>
        <StyledMiniCartIcon onMouseOver={() => !this.props.isVisible && this.props.dispatchToggleMiniCartVisibility()}>
                    MiniCartIcon {this.props.amount !== 0 ? this.props.amount : null}
        </StyledMiniCartIcon>
      </Link>
    );
  }
}
//TODO: disable hover when in /cart

export default MiniCartIcon;
