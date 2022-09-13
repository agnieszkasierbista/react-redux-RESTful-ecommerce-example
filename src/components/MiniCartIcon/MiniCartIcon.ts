import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { State } from '../App/App.types';
import MiniCartIcon from './MiniCartIcon.layout';
import {MiniCartIconDispatchProps, MiniCartIconStateProps} from './MiniCartIcon.types';

function mapStateToProps(state: State): MiniCartIconStateProps {
  return {
    amount: state.cart.products.length
  };
}

function mapDispatchToProps(dispatch:Dispatch): MiniCartIconDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartIcon);