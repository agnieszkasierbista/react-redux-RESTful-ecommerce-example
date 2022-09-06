import {PureComponent} from "react";
import {ProductListingPageProps} from "./ProductListingPage.types";
import {StyledProductListingPage} from "./ProductListingPage.styled";

export class ProductListingPage extends PureComponent<ProductListingPageProps> {
    render() {
        return (
            <StyledProductListingPage>
                ProductListingPage
            </StyledProductListingPage>
        );
    }
}

export default ProductListingPage;