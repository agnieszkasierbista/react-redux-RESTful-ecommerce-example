import {PropsWithChildren, PureComponent} from "react";
import {ProductListingPageProps} from "./ProductListingPage.types";
import {StyledPLPitem, StyledProductListingPage, StyledProductListingPageImg} from "./ProductListingPage.styled";


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
console.log("src", product.gallery[0])
                        return (
                            <StyledPLPitem key={product.id}>
                                <StyledProductListingPageImg imgSrc={product.gallery[0]}></StyledProductListingPageImg>
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