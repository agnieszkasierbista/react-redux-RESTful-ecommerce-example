import {Dispatch} from "redux"
import {connect} from "react-redux";
import { State } from "../App/App.types";
import MiniCartIcon from "./MiniCartIcon.layout";

function mapStateToProps(state: State) {
    return {}
}

function mapDispatchToProps(dispatch:Dispatch) {
return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartIcon)