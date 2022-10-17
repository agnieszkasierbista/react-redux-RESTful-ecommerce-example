import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {toggleIsUserPanelExtended} from '../../actions';
import {UserPanelDispatchProps, UserPanelStateProps} from './UserPanel.types';
import {State} from '../../types';
import UserPanel from './UserPanel.layout';

function mapStateToProps(state: State): UserPanelStateProps {
  return {
    isUserPanelExtended: state.userPanel.isUserPanelExtended,
  };
}

function mapDispatchToProps(dispatch: Dispatch): UserPanelDispatchProps {
  return {
    dispatchToggleIsUserPanelExtended: () => dispatch(toggleIsUserPanelExtended()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
