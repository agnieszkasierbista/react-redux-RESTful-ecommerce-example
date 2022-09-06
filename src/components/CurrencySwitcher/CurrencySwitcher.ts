import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../App/App.types";
import CurrencySwitcher from "./CurrencySwitcher.layout";
import {toggleIsExtended} from "../../actions";

function mapStateToProps(state: State) {
    return {
        isExtended: state.currencySwitcher.isExtended,
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchToggleIsExtended: () => dispatch(toggleIsExtended()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher)