import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppDispatchProps, AppStateProps} from './App.types';
import {init, setCurrentNavigation} from '../../actions';
import App from './App.layout';
import {State} from '../../types';

function mapStateToProps(state: State): AppStateProps {
  return {
    categories: state.categoryTabs.categories,
  };
}

function mapDispatchToProps(dispatch: Dispatch): AppDispatchProps {
  return {
    dispatchInit: () => dispatch(init()),
    dispatchSetCurrentNavigation: (path) => dispatch(setCurrentNavigation(path))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
