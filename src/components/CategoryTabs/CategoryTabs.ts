import {connect} from 'react-redux';
import CategoryTabs from './CategoryTabs.layout';
import {CategoryTabsStateProps} from './CategoryTabs.types';
import {State} from '../../types';

function mapStateToProps(state: State): CategoryTabsStateProps {
  return {
    currentNavigation: state.tab.currentNavigation,
    categories: state.categoryTabs.categories
  };
}

export default connect(mapStateToProps)(CategoryTabs);