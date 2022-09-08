import {PropsWithChildren, PureComponent} from "react";
import {ProductListingPageProps} from "./ProductListingPage.types";
import {StyledPLPitem, StyledProductListingPage} from "./ProductListingPage.styled";


export class ProductListingPage extends PureComponent<PropsWithChildren<ProductListingPageProps>> {
    render() {
        return (
            <StyledProductListingPage>
                {this.props.products.filter((product) => {
                    return this.props.shouldInclude(product);
                }).map(product => {

                        const price = product.prices.find(
                            (price) => {
                                return price.currency.label === this.props.currentCurrency.label;
                            }
                        );

                        return (
                            <StyledPLPitem key={product.id}>
                                <img alt="Here is a IMG"/>
                                <p>{product.name}</p>
                                <p>
                                    Price goes here: {price?.currency.symbol} {price?.amount}
                                </p>
                            </StyledPLPitem>
                        )
                    }
                )}
            </StyledProductListingPage>
        );
    }
}

export default ProductListingPage;