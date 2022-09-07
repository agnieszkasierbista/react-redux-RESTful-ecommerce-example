import {Dispatch} from "redux"
import {connect} from "react-redux";
import { State } from "../App/App.types";
import MiniCart from "./MiniCart.layout";
import {MiniCartDispatchProps, MiniCartStateProps} from "./MiniCart.types";

function mapStateToProps(state: State): MiniCartStateProps {
    return {
        abc: true,
    }
}

function mapDispatchToProps(dispatch:Dispatch): MiniCartDispatchProps {
return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)