import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../App/App.types";
import NavBar from "./NavBar.layout";

function mapStateToProps(state: State) {
    return {}
}

function mapDispatchToProps(dispatch:Dispatch) {
return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)