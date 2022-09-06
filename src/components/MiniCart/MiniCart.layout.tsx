import {PureComponent} from "react";
import {StyledMiniCart} from "./MiniCart.styled";
import {MiniCartProps} from "./MiniCart.types";

export class MiniCartLayout extends PureComponent<MiniCartProps> {
    render() {
        return (
            <StyledMiniCart>
                MiniCART
            </StyledMiniCart>
        );
    }
}

export default MiniCartLayout;
