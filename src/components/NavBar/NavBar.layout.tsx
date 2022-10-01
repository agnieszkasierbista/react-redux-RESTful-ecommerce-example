import {PropsWithChildren, PureComponent} from 'react';
import {NavBarProps} from './NavBar.types';
import {StyledNavBar} from './NavBar.styled';

export class NavBar extends PureComponent<PropsWithChildren<NavBarProps>> {
  render() {
    return (
      <StyledNavBar isMiniCartVisible={this.props.isMiniCartVisible}>
        {this.props.children}
      </StyledNavBar>
    );
  }
}

export default NavBar;
