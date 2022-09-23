import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {MiniCartOverlayDispatchProps, MiniCartOverlayStateProps} from './MiniCartOverlay.types';
import {toggleMiniCartVisibility} from '../../actions';
import {State} from '../../types';
import MiniCartOverlay from './MiniCartOverlay.layout';

function mapStateToProps(state: State): MiniCartOverlayStateProps {
  return {
    isMiniCartVisible: state.cart.isVisible,
  };
}

function mapDispatchToProps(dispatch:Dispatch): MiniCartOverlayDispatchProps {
  return {
    dispatchToggleMiniCartVisibility: () => dispatch(toggleMiniCartVisibility())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartOverlay);