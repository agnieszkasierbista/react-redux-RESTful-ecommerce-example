import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import Cart from './Cart.layout';
import {CartDispatchProps, CartStateProps} from './Cart.types';
import {addToCart, removeOneFromCart} from '../../actions';

function mapStateToProps(state: State): CartStateProps {
  return {
    products: state.cart.products,
    currentCurrency: state.currencySwitcher.currentCurrency,
    amount: state.cart.amount,
  };
}

function mapDispatchToProps(dispatch: Dispatch): CartDispatchProps {
  return {
    dispatchRemoveOneFromCart: (product) => dispatch(removeOneFromCart(product)),
    dispatchAddToCart: (product) => dispatch(addToCart(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);