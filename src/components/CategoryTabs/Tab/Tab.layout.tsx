import {PropsWithChildren, PureComponent} from "react";
import { StyledTab } from "./Tab.styled";
import { TabProps } from "./Tab.types";

export class Tab extends PureComponent<PropsWithChildren<TabProps>> {
    render() {
        return (
            <StyledTab>
                {this.props.children}
            </StyledTab>
        );
    }
}

export default Tab;
