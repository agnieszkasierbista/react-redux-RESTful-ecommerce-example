import {connect} from 'react-redux';
import NavBar from './NavBar.layout';
import {NavBarStateProps} from './NavBar.types';
import {State} from '../../types';

function mapStateToProps(state: State): NavBarStateProps {
  return {
    isMiniCartVisible: state.cart.isVisible,
  };
}

export default connect(mapStateToProps)(NavBar);