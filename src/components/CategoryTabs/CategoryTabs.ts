import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import CategoryTabs from './CategoryTabs.layout';
import {CategoryTabsStateProps} from './CategoryTabs.types';
import {CartDispatchProps} from '../Cart/Cart.types';

function mapStateToProps(state: State): CategoryTabsStateProps {
  return {
    categories: state.categoryTabs.categories
  };
}

function mapDispatchToProps(dispatch: Dispatch): CartDispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);