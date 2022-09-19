import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import MiniCartIcon from './MiniCartIcon.layout';
import {MiniCartIconDispatchProps, MiniCartIconStateProps} from './MiniCartIcon.types';
import {toggleMiniCartVisibility} from '../../actions';
import { withPathname } from '../hocs';
import {State} from '../../types';

function mapStateToProps(state: State): MiniCartIconStateProps {
  return {
    products: state.cart.products,
    amount: state.cart.amount,
    isVisible: state.cart.isVisible
  };
}

function mapDispatchToProps(dispatch: Dispatch): MiniCartIconDispatchProps {
  return {
    dispatchToggleMiniCartVisibility: () => dispatch(toggleMiniCartVisibility()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withPathname(MiniCartIcon));