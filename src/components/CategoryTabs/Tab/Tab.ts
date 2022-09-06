import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../../App/App.types"
import Tab from "./Tab.layout";

function mapStateToProps(state: State) {
    return {}
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)