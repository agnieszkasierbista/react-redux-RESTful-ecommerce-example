import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Tab from './Tab.layout';
import {TabDispatchProps, TabStateProps} from './Tab.types';
import {State} from '../../../types';
import {setCurrentNavigation} from '../../../actions';

function mapStateToProps(state: State): TabStateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): TabDispatchProps {
  return {
    dispatchSetCurrentNavigation: (path) => dispatch(setCurrentNavigation(path))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);