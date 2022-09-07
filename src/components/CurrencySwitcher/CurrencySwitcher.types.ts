
export interface CurrencySwitcherProps extends CurrencySwitcherOwnProps,
    CurrencySwitcherStateProps,
    CurrencySwitcherDispatchProps {
}

export interface CurrencySwitcherOwnProps {

}

export interface CurrencySwitcherStateProps {
    isExtended: boolean,
    currencies: Currency[],
    currentCurrency: Currency,
}

export interface CurrencySwitcherDispatchProps {
    dispatchToggleIsExtended: () => void,
    dispatchSetCurrentCurrency: (currency: Currency) => void,
}

export type Currency = {
    symbol: string,
    label: string
}