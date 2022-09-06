import {PureComponent} from "react";
import {StyledCurrencySwitcher} from "./CurrencySwitcher.styled";
import {CurrencySwitcherProps} from "./CurrencySwitcher.types";

export class CurrencySwitcherLayout extends PureComponent<CurrencySwitcherProps> {
    render() {
        return (
            <StyledCurrencySwitcher>
                CurrencySwitcher
            </StyledCurrencySwitcher>
        );
    }
}

export default CurrencySwitcherLayout;
