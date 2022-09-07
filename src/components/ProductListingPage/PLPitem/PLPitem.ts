import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../../App/App.types";
import PLPitem from "./PLPitem.layout";
import {PLPitemDispatchProps, PLPitemStateProps} from "./PLPitem.types";

function mapStateToProps(state: State): PLPitemStateProps {
    return {
        products: state.productListingPage.products
    }
}

function mapDispatchToProps(dispatch: Dispatch): PLPitemDispatchProps  {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PLPitem)