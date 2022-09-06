import {PureComponent} from "react";
import {ProductListingPageProps} from "./ProductListingPage.types";
import {StyledProductListingPage} from "./ProductListingPage.styled";

export class ProductListingPageLayout extends PureComponent<ProductListingPageProps> {
    render() {
        return (
            <StyledProductListingPage>
                ProductListingPage
            </StyledProductListingPage>
        );
    }
}

export default ProductListingPageLayout;