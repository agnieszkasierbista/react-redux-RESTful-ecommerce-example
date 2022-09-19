import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Cart from './Cart.layout';
import {CartDispatchProps, CartStateProps} from './Cart.types';
import {addToCart, removeOneFromCart} from '../../actions';
import {State} from '../../types';

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