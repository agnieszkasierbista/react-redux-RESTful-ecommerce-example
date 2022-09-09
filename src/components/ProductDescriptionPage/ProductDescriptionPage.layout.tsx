import {PropsWithChildren, PureComponent} from "react";
import {ProductDescriptionPageProps} from "./ProductDescriptionPage.types";
import {StyledProductDescriptionPage} from "./ProductDescriptionPage.styled";

export class ProductDescriptionPage extends PureComponent<PropsWithChildren<ProductDescriptionPageProps>> {
    componentDidMount() {
        this.props.dispatchGetProductDetails((this.props.pathName).split("/")[3]);
    }

    render() {
        return (
            <StyledProductDescriptionPage>
                {(this.props.pathName).split("/")[3]}
            </StyledProductDescriptionPage>
        );
    }
}

export default ProductDescriptionPage;