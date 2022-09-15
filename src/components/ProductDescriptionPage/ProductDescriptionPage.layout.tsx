import React, {PropsWithChildren, PureComponent} from 'react';
import {ProductDescriptionPageProps, ProductInCart, Selected} from './ProductDescriptionPage.types';
import {
  StyledAttribute,
  StyledAttributeName,
  StyledAttributeValue,
  StyledAttributeValues,
  StyledProductDescriptionPage,
  StyledProductDetails
} from './ProductDescriptionPage.styled';
import Gallery from './Gallery/Gallery';
import {findPrice} from './helpers';
import {createDefaultAttrObj, getIsSelected} from '../helpers';

export class ProductDescriptionPage extends PureComponent<PropsWithChildren<ProductDescriptionPageProps>> {
  componentDidMount() {
    this.props.dispatchGetProductDetails((this.props.pathName).split('/')[3]);
  }

  componentWillUnmount() {
    this.props.dispatchClearSelectedAttributes();
  }

  render() {

    const currentPrice = findPrice(this.props.productDetails, this.props.currentCurrency);
    const defaultAttributes: Selected[] = this.props.productDetails.attributes.map(createDefaultAttrObj);

    const productInCart: ProductInCart = this.props.selected.length
      ?
      {
        ...this.props.productDetails,
        selected: defaultAttributes.map((defaultAttribute) => {

          return {
            ...defaultAttribute,
            ...(this.props.selected.find((selectedAttr) => selectedAttr.id === defaultAttribute.id))
          };
        }),
      }
      :
      {
        ...this.props.productDetails,
        selected: defaultAttributes,
      };

    return (

      <StyledProductDescriptionPage>
        {/*{(this.props.pathName).split("/")[3]}*/}
        {/*<div>{JSON.stringify(this.props.productDetails)}</div>*/}


        <Gallery pictures={this.props.productDetails.gallery}/>

        <StyledProductDetails>

          <h1>DETAILS</h1>
          <section>{this.props.productDetails.brand}</section>
          <section>{this.props.productDetails.name}</section>


          {this.props.productDetails.attributes.map(attribute => {

            if (attribute.id === 'Color') {
              return (
                <StyledAttribute key={attribute.id}>
                  <StyledAttributeName>
                    <p>{`${attribute.name}:`}</p>
                  </StyledAttributeName>
                  <StyledAttributeValues>
                    {attribute.items.map(item => {

                      const selectedAttr = {
                        id: attribute.id,
                        item: {
                          displayValue: item.displayValue,
                          value: item.value,
                          id: item.id,
                          selected: true
                        }
                      };

                      return <StyledAttributeValue
                        color={item.value}
                        key={item.id}
                        onClick={() => this.props.dispatchSelectAttr(selectedAttr)}
                        isSelected={getIsSelected(productInCart, item, attribute)}
                      >
                      </StyledAttributeValue>;
                    })}
                  </StyledAttributeValues>
                </StyledAttribute>
              );
            } else {
              return (
                <StyledAttribute key={attribute.id}>
                  <StyledAttributeName>
                    <p>{`${attribute.name}:`}</p>
                  </StyledAttributeName>
                  <StyledAttributeValues>
                    {attribute.items.map(item => {

                      const selectedAttr = {
                        id: attribute.id,
                        item: {
                          displayValue: item.displayValue,
                          value: item.value,
                          id: item.id,
                          selected: true
                        }
                      };

                      return (
                        <StyledAttributeValue
                          key={item.id}
                          onClick={() => this.props.dispatchSelectAttr(selectedAttr)}
                          isSelected={getIsSelected(productInCart, item, attribute)}
                        >
                          {item.displayValue}

                        </StyledAttributeValue>
                      );
                    })}
                  </StyledAttributeValues>
                </StyledAttribute>
              );
            }
          })}

          <section>
            <p>Price:</p>
            <p>{`${currentPrice.currency.symbol} ${currentPrice.amount}`}</p>
          </section>
          <button disabled={!this.props.productDetails.inStock} onClick={() => this.props.dispatchAddToCart(productInCart)}>ADD TO CART</button>
          <section>
            <div dangerouslySetInnerHTML={{__html: this.props.productDetails.description}}/>
          </section>


        </StyledProductDetails>
      </StyledProductDescriptionPage>
    );
  }
}

export default ProductDescriptionPage;