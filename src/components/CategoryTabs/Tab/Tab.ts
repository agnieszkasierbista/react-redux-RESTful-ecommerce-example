import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Tab from './Tab.layout';
import {TabDispatchProps} from './Tab.types';
import {setCurrentNavigation} from '../../../actions';

function mapDispatchToProps(dispatch: Dispatch): TabDispatchProps {
  return {
    dispatchSetCurrentNavigation: (path) => dispatch(setCurrentNavigation(path))
  };
}

export default connect(null, mapDispatchToProps)(Tab);