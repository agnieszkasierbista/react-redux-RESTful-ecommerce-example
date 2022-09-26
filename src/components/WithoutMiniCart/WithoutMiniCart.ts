import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import WithoutMiniCart from './WithoutMiniCart.layout';
import {setMiniCartState} from '../../actions';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchSetMiniCartState: (isActive: boolean) => dispatch(setMiniCartState(isActive)),
  };
}

export default connect(null, mapDispatchToProps)(WithoutMiniCart);