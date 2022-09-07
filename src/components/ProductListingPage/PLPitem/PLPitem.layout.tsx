import {PropsWithChildren, PureComponent} from "react";
import {PLPitemProps} from "./PLPitem.types";
import {StyledPLPitem} from "./PLPitem.styled";

export class PLPitem extends PureComponent<PropsWithChildren<PLPitemProps>> {
    render() {
        return (
            <StyledPLPitem>
                {this.props.children}
            </StyledPLPitem>
        );
    }
}

export default PLPitem;