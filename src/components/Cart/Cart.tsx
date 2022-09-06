import {PureComponent} from "react";
import {CartProps} from "./Cart.types";
import {StyledCart} from "./Cart.styled";

export class Cart extends PureComponent<CartProps> {
    render() {
        return (
            <StyledCart>
                CART
            </StyledCart>
        );
    }
}

export default Cart;
