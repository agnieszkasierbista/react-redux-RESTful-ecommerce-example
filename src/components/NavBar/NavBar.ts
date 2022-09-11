import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import NavBar from './NavBar.layout';
import {NavBarDispatchProps, NavBarStateProps} from './NavBar.types';

function mapStateToProps(state: State): NavBarStateProps {
  return {};
}

function mapDispatchToProps(dispatch:Dispatch): NavBarDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);