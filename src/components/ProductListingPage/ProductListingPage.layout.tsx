import {PropsWithChildren, PureComponent} from "react";
import {ProductListingPageProps} from "./ProductListingPage.types";
import {StyledProductListingPage} from "./ProductListingPage.styled";
import PLPitem from "./PLPitem/PLPitem";

export class ProductListingPage extends PureComponent<PropsWithChildren<ProductListingPageProps>> {
    render() {
        return (
            <StyledProductListingPage>
                {this.props.products.map(product => {
                    return(
                    <PLPitem>{product.name}</PLPitem>
                    )}
                )}
            </StyledProductListingPage>
        );
    }
}

export default ProductListingPage;