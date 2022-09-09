import {Dispatch} from "redux"
import {connect} from "react-redux";
import {AppDispatchProps, AppStateProps, State} from "../App/App.types";
import { init } from "../../actions";
import App from "./App.layout";

function mapStateToProps(state: State): AppStateProps {
    return {
        categories: state.categoryTabs.categories
    }
}

function mapDispatchToProps(dispatch: Dispatch): AppDispatchProps {
    return {
        dispatchInit: () => dispatch(init())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);