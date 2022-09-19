import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import CurrencySwitcher from './CurrencySwitcher.layout';
import {setCurrentCurrency, toggleIsExtended} from '../../actions';
import {Currency, CurrencySwitcherDispatchProps, CurrencySwitcherStateProps} from './CurrencySwitcher.types';
import {State} from '../../types';

function mapStateToProps(state: State): CurrencySwitcherStateProps {
  return {
    isExtended: state.currencySwitcher.isExtended,
    currencies: state.currencySwitcher.currencies,
    currentCurrency: state.currencySwitcher.currentCurrency
  };
}

function mapDispatchToProps(dispatch: Dispatch): CurrencySwitcherDispatchProps {
  return {
    dispatchToggleIsExtended: () => dispatch(toggleIsExtended()),
    dispatchSetCurrentCurrency: (currency: Currency) => dispatch(setCurrentCurrency(currency))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);