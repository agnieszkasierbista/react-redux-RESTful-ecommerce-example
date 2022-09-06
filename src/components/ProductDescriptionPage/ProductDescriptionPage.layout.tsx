import {PropsWithChildren, PureComponent} from "react";
import {ProductDescriptionPageProps} from "./ProductDescriptionPage.types";
import {StyledProductDescriptionPage} from "./ProductDescriptionPage.styled";

export class ProductDescriptionPage extends PureComponent<PropsWithChildren<ProductDescriptionPageProps>> {
    render() {
        return (
            <StyledProductDescriptionPage>
                ProductDescriptionPage
            </StyledProductDescriptionPage>
        );
    }
}

export default ProductDescriptionPage;