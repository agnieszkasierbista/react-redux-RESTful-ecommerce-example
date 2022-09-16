import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import MiniCart from './MiniCart.layout';
import {MiniCartDispatchProps, MiniCartStateProps} from './MiniCart.types';
import {toggleMiniCartVisibility} from '../../actions';

function mapStateToProps(state: State): MiniCartStateProps {
  return {
    isVisible: state.cart.isVisible,
  };
}

function mapDispatchToProps(dispatch:Dispatch): MiniCartDispatchProps {
  return {
    dispatchToggleMiniCartVisibility: () => dispatch(toggleMiniCartVisibility())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);