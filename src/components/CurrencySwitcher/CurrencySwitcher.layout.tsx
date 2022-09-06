import {PropsWithChildren, PureComponent} from "react";
import {
    StyledCurrencyDropdownContainer,
    StyledCurrencyDropdownItem,
    StyledCurrencyDropdownList,
    StyledCurrencySwitcher
} from "./CurrencySwitcher.styled";
import {CurrencySwitcherProps} from "./CurrencySwitcher.types";


const currencies = [{symbol: "$", name: "USD"}, {symbol: "E", name: "EUR"}, {symbol: "Y", name: "JPY"}];

export class CurrencySwitcher extends PureComponent<PropsWithChildren<CurrencySwitcherProps>> {
    render() {

        console.log(this.props.isExtended)
        return (
            <StyledCurrencySwitcher onClick={() => this.props.dispatchToggleIsExtended()}>
                Dropdown title:
                <StyledCurrencyDropdownContainer>
                    {
                        this.props.isExtended
                        &&
                        <StyledCurrencyDropdownList>
                            {currencies.map((currency) => <StyledCurrencyDropdownItem
                                key={`${currency.name}.${currency.name}`}>{currency.name}</StyledCurrencyDropdownItem>)}
                        </StyledCurrencyDropdownList>
                    }
                </StyledCurrencyDropdownContainer>
            </StyledCurrencySwitcher>
        );
    }
}

export default CurrencySwitcher;
