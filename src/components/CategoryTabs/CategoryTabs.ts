import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import CategoryTabs from './CategoryTabs.layout';
import {CategoryTabsDispatchProps, CategoryTabsStateProps} from './CategoryTabs.types';
import {State} from '../../types';

function mapStateToProps(state: State): CategoryTabsStateProps {
  return {
    currentNavigation: state.tab.currentNavigation,
    categories: state.categoryTabs.categories
  };
}

function mapDispatchToProps(dispatch: Dispatch): CategoryTabsDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);