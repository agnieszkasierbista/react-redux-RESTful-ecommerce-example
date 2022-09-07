import {PropsWithChildren, PureComponent} from "react";
import {
    StyledCurrencyDropdownContainer,
    StyledCurrencyDropdownItem,
    StyledCurrencyDropdownList,
    StyledCurrencySwitcher
} from "./CurrencySwitcher.styled";
import {CurrencySwitcherProps} from "./CurrencySwitcher.types";


export class CurrencySwitcher extends PureComponent<PropsWithChildren<CurrencySwitcherProps>> {
    render() {

        console.log(this.props.isExtended)
        return (
            <StyledCurrencySwitcher onClick={() => this.props.dispatchToggleIsExtended()}>
                {`${this.props.currentCurrency.symbol}`}
                <StyledCurrencyDropdownContainer>
                    {
                        this.props.isExtended
                        &&
                        <StyledCurrencyDropdownList>
                            {this.props.currencies.map((currency) => {
                                return (
                                    <StyledCurrencyDropdownItem
                                        key={`${currency.symbol}.${currency.label}`}
                                    onClick={()=> this.props.dispatchSetCurrentCurrency(currency)}
                                    >

                                        {`${currency.symbol} ${currency.label}`}

                                    </StyledCurrencyDropdownItem>
                                )
                            })}
                        </StyledCurrencyDropdownList>
                    }
                </StyledCurrencyDropdownContainer>
            </StyledCurrencySwitcher>
        );
    }
}

export default CurrencySwitcher;
