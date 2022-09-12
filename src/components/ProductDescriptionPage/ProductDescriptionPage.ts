import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import ProductDescriptionPage from './ProductDescriptionPage.layout';
import {ProductDescriptionPageDispatchProps, ProductDescriptionPageStateProps} from './ProductDescriptionPage.types';
import {getProductDetails} from '../../actions';
import {withPathname} from './helpers';

function mapStateToProps(state: State): ProductDescriptionPageStateProps {
  return {
    productDetails: state.productDescriptionPage.productDetails,
    currentCurrency: state.currencySwitcher.currentCurrency
  };
}

function mapDispatchToProps(dispatch: Dispatch): ProductDescriptionPageDispatchProps {
  return {
    dispatchGetProductDetails: (id) => dispatch(getProductDetails(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withPathname(ProductDescriptionPage));