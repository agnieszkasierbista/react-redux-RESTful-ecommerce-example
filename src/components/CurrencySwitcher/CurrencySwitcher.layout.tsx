import {PropsWithChildren, PureComponent} from 'react';
import {
  StyledCurrencyDropdownContainer,
  StyledCurrencyDropdownItem,
  StyledCurrencyDropdownList,
  StyledCurrencySwitcher, StyledCurrencySwitcherOverlay
} from './CurrencySwitcher.styled';
import {CurrencySwitcherProps} from './CurrencySwitcher.types';


export class CurrencySwitcher extends PureComponent<PropsWithChildren<CurrencySwitcherProps>> {
  render() {

    return (
      <StyledCurrencySwitcher onClick={() => this.props.dispatchToggleIsExtended()}>
        {`${this.props.currentCurrency.symbol}`}
        <StyledCurrencySwitcherOverlay isExtended={this.props.isExtended}/>
        <StyledCurrencyDropdownContainer>
          {
            this.props.isExtended
                        &&
                        <StyledCurrencyDropdownList>
                          {this.props.currencies.map((currency) => {
                            return (
                              <StyledCurrencyDropdownItem
                                key={`${currency.symbol}.${currency.label}`}
                                onClick={() => this.props.dispatchSetCurrentCurrency(currency)}
                              >

                                {`${currency.symbol} ${currency.label}`}

                              </StyledCurrencyDropdownItem>
                            );
                          })}
                        </StyledCurrencyDropdownList>
          }
        </StyledCurrencyDropdownContainer>
      </StyledCurrencySwitcher>
    );
  }
}

export default CurrencySwitcher;
