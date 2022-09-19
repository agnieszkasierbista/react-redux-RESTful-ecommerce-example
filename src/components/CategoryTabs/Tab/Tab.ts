import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Tab from './Tab.layout';
import {TabDispatchProps, TabStateProps} from './Tab.types';
import {State} from '../../../types';

function mapStateToProps(state: State): TabStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): TabDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);