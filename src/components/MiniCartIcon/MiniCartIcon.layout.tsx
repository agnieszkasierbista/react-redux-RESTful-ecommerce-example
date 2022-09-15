import {PropsWithChildren, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {StyledMiniCartIcon} from './MiniCartIcon.styled';
import {MiniCartIconProps} from './MiniCartIcon.types';

export class MiniCartIcon extends PureComponent<PropsWithChildren<MiniCartIconProps>> {
  render() {
    return (
      <Link to='/cart'>
        <StyledMiniCartIcon>
                    MiniCartIcon {this.props.amount !== 0 ? this.props.amount : null}
        </StyledMiniCartIcon>
      </Link>
    );
  }
}

export default MiniCartIcon;
