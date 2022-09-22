import {PropsWithChildren, PureComponent} from 'react';
import {
  StyledChevron,
  StyledCurrencyDropdownContainer,
  StyledCurrencyDropdownItem,
  StyledCurrencyDropdownItemButton,
  StyledCurrencyDropdownList,
  StyledCurrencySwitcher, StyledCurrencySwitcherHeader, StyledCurrencySwitcherOverlay, StyledCurrencySymbol
} from './CurrencySwitcher.styled';
import {CurrencySwitcherProps} from './CurrencySwitcher.types';


export class CurrencySwitcher extends PureComponent<PropsWithChildren<CurrencySwitcherProps>> {
  render() {

    return (
      <StyledCurrencySwitcher onClick={() => this.props.dispatchToggleIsExtended()}>
        <StyledCurrencySwitcherHeader>
          <StyledCurrencySymbol>{`${this.props.currentCurrency.symbol}`}</StyledCurrencySymbol>
          <StyledChevron src="/pictures/Vector.svg" alt="chevron" isExtended={this.props.isExtended}/>
        </StyledCurrencySwitcherHeader>
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
                              >

                                <StyledCurrencyDropdownItemButton
                                  onClick={() => this.props.dispatchSetCurrentCurrency(currency)}
                                >
                                  {`${currency.symbol} ${currency.label}`}
                                    
                                </StyledCurrencyDropdownItemButton>

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
