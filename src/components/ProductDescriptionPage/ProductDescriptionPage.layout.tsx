import React, {PropsWithChildren, PureComponent} from 'react';
import {ProductDescriptionPageProps} from './ProductDescriptionPage.types';
import {
  StyledAttribute, StyledAttributeName, StyledAttributeValue,
  StyledAttributeValues, StyledProductDescriptionPage, StyledProductDetails
} from './ProductDescriptionPage.styled';
import Gallery from './Gallery/Gallery.layout';

export class ProductDescriptionPage extends PureComponent<PropsWithChildren<ProductDescriptionPageProps>> {
  componentDidMount() {
    this.props.dispatchGetProductDetails((this.props.pathName).split('/')[3]);
  }

  render() {
    return (
      <StyledProductDescriptionPage>
        {/*{(this.props.pathName).split("/")[3]}*/}
        {/*<div>{JSON.stringify(this.props.productDetails)}</div>*/}


        <Gallery pictures={this.props.productDetails.gallery}/>

        <StyledProductDetails>

          <h1>DETAILS</h1>
          <section>{this.props.productDetails.brand}</section>
          <section>{this.props.productDetails.name}</section>

          <section>
            {this.props.productDetails.attributes.map(attribute => {
              return <StyledAttribute key={attribute.id}>
                <StyledAttributeName>
                  {attribute.name}
                </StyledAttributeName>
                <StyledAttributeValues>
                  {attribute.items.map(item => {
                    return <StyledAttributeValue
                      key={item.id}>{item.displayValue}</StyledAttributeValue>;
                  })}
                </StyledAttributeValues>
              </StyledAttribute>;
            })}
          </section>
          <section>{this.props.productDetails.prices[0]?.amount}</section>
          <button>ADD TO CART</button>
          <section><div dangerouslySetInnerHTML={{__html: this.props.productDetails.description}}/></section>


        </StyledProductDetails>
      </StyledProductDescriptionPage>
    );
  }
}

export default ProductDescriptionPage;