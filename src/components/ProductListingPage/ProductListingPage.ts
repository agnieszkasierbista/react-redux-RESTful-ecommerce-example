import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import ProductListingPage from './ProductListingPage.layout';
import {ProductListingPageDispatchProps, ProductListingPageStateProps} from './ProductListingPage.types';
import {addToCart, addToCartByProductId} from '../../actions';
import {ProductInCart, State} from '../../types';

function mapStateToProps(state: State): ProductListingPageStateProps {
  return {
    products: state.productListingPage.products,
    currentCurrency: state.currencySwitcher.currentCurrency
  };
}

function mapDispatchToProps(dispatch: Dispatch): ProductListingPageDispatchProps  {
  return {
    dispatchAddToCart: (product: ProductInCart) => dispatch(addToCart(product)),
    dispatchAddToCartByProductId: (productId: string) => dispatch(addToCartByProductId(productId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);