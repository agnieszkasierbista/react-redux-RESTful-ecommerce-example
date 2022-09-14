import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import CategoryTabs from './CategoryTabs.layout';
import {CategoryTabsDispatchProps, CategoryTabsStateProps} from './CategoryTabs.types';

function mapStateToProps(state: State): CategoryTabsStateProps {
  return {
    categories: state.categoryTabs.categories
  };
}

function mapDispatchToProps(dispatch: Dispatch): CategoryTabsDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);