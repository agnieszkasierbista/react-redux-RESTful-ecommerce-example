import {PureComponent} from "react";
import {ProductDescriptionPageProps} from "./ProductDescriptionPage.types";
import {StyledProductDescriptionPage} from "./ProductDescriptionPage.styled";

export class ProductDescriptionPageLayout extends PureComponent<ProductDescriptionPageProps> {
    render() {
        return (
            <StyledProductDescriptionPage>
                ProductDescriptionPage
            </StyledProductDescriptionPage>
        );
    }
}

export default ProductDescriptionPageLayout;