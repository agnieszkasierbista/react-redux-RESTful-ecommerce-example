import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import ProductDescriptionPage from './ProductDescriptionPage.layout';
import {ProductDescriptionPageDispatchProps, ProductDescriptionPageStateProps} from './ProductDescriptionPage.types';
import {addToCart, clearSelectedAttributes, getProductDetails, selectAttr} from '../../actions';
import {withPathname} from './helpers';
import {State} from '../../types';

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
    dispatchClearSelectedAttributes: () => dispatch(clearSelectedAttributes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withPathname(ProductDescriptionPage));