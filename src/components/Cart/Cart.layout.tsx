import {PureComponent} from "react";
import {CartProps} from "./Cart.types";
import {StyledCart} from "./Cart.styled";

export class CartLayout extends PureComponent<CartProps> {
    render() {
        return (
            <StyledCart>
                CART
            </StyledCart>
        );
    }
}

export default CartLayout;
