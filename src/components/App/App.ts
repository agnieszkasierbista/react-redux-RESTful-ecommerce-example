import {Dispatch} from "redux"
import {connect} from "react-redux";
import {State} from "../App/App.types";
import { init } from "../../actions";
import App from "./App.layout";

function mapStateToProps(state: State) {
    return {}
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchInit: () => dispatch(init())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);