import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../App/App.types';
import ProductDescriptionPage from './ProductDescriptionPage.layout';
import {
  ProductDescriptionPageDispatchProps,
  ProductDescriptionPageStateProps,
  Selected
} from './ProductDescriptionPage.types';
import {addToCart, getProductDetails, selectAttr} from '../../actions';
import {withPathname} from './helpers';

function mapStateToProps(state: State): ProductDescriptionPageStateProps {
  return {
    productDetails: state.productDescriptionPage.productDetails,
    currentCurrency: state.currencySwitcher.currentCurrency,
    selected: state.productDescriptionPage.selected,
  };
}

function mapDispatchToProps(dispatch: Dispatch): ProductDescriptionPageDispatchProps {
  return {
    dispatchGetProductDetails: (id) => dispatch(getProductDetails(id)),
    dispatchAddToCart: (productInCart) => dispatch(addToCart(productInCart)),
    dispatchSelectAttr: (selected) => dispatch(selectAttr(selected)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withPathname(ProductDescriptionPage));