import {PureComponent} from "react";
import {NavBarProps} from "./NavBar.types";
import {StyledNavBar} from "./NavBar.styled";

export class NavBar extends PureComponent<NavBarProps> {
    render() {
        return (
            <StyledNavBar>
                NavBar
            </StyledNavBar>
        );
    }
}

export default NavBar;
