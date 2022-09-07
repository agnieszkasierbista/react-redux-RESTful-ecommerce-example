import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../App/App.types";
import ProductDescriptionPage from "./ProductDescriptionPage.layout";
import {ProductDescriptionPageDispatchProps, ProductDescriptionPageStateProps} from "./ProductDescriptionPage.types";

function mapStateToProps(state: State): ProductDescriptionPageStateProps {
    return {}
}

function mapDispatchToProps(dispatch: Dispatch): ProductDescriptionPageDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPage)