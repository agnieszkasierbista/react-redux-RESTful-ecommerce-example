import {Dispatch} from "redux"
import {connect} from "react-redux";
import { State } from "../App/App.types";
import MiniCart from "./MiniCart.layout";

function mapStateToProps(state: State) {
    return {
        abc: true,
    }
}

function mapDispatchToProps(dispatch:Dispatch) {
return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)