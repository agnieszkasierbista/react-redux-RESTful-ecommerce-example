import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../App/App.types";
import ProductListingPage from "./ProductListingPage.layout";
import {ProductListingPageDispatchProps, ProductListingPageStateProps} from "./ProductListingPage.types";

function mapStateToProps(state: State): ProductListingPageStateProps {
    return {
        products: state.productListingPage.products,
        currentCurrency: state.currencySwitcher.currentCurrency
    }
}

function mapDispatchToProps(dispatch: Dispatch): ProductListingPageDispatchProps  {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage)