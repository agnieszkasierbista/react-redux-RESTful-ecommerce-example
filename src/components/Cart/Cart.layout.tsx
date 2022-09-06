import {PropsWithChildren, PureComponent} from "react";
import {CartProps} from "./Cart.types";
import {StyledCart} from "./Cart.styled";

export class Cart extends PureComponent<PropsWithChildren<CartProps>> {
    render() {
        return (
            <StyledCart>
                CART
            </StyledCart>
        );
    }
}

export default Cart;
