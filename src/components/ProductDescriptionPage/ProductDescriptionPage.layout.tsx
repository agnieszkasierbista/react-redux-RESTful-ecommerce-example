import React, {PropsWithChildren, PureComponent} from 'react';
import {ProductDescriptionPageProps} from './ProductDescriptionPage.types';
import {
  StyledAddToCartButton,
  StyledAttribute,
  StyledAttributeName,
  StyledAttributeValue,
  StyledAttributeValues, StyledAttributeValueText,
  StyledDescription,
  StyledProductDescriptionPage,
  StyledProductDetails,
  StyledProductDetailsBrand,
  StyledProductDetailsName,
  StyledProductPrice
} from './ProductDescriptionPage.styled';
import Gallery from './Gallery/Gallery';
import {createDefaultAttrObj, findPrice, getIsSelected} from '../helpers';
import {ProductInCart, Selected} from '../../types';

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

        <Gallery pictures={this.props.productDetails.gallery}/>

        <StyledProductDetails>

          <StyledProductDetailsBrand>{this.props.productDetails.brand}</StyledProductDetailsBrand>
          <StyledProductDetailsName>{this.props.productDetails.name}</StyledProductDetailsName>

          {this.props.productDetails.attributes.map(attribute => {

            if (attribute.type === 'swatch') {
              return (
                <StyledAttribute key={attribute.id}>
                  <StyledAttributeName>
                    <span>{`${attribute.name}:`}</span>
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
                          color={item.value}
                          key={item.id}
                          onClick={() => this.props.dispatchSelectAttr(selectedAttr)}
                          isSelected={getIsSelected(productInCart, item, attribute)}
                        >
                        </StyledAttributeValue>
                      );
                    })}
                  </StyledAttributeValues>
                </StyledAttribute>
              );
            } else {
              return (
                <StyledAttribute key={attribute.id}>
                  <StyledAttributeName>
                    <span>{`${attribute.name}:`}</span>
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
                          <StyledAttributeValueText>{item.value}</StyledAttributeValueText>

                        </StyledAttributeValue>
                      );
                    })}
                  </StyledAttributeValues>
                </StyledAttribute>
              );
            }
          })}

          <StyledAttribute>
            <StyledAttributeName>Price:</StyledAttributeName>
            <StyledProductPrice>{`${currentPrice.currency.symbol} ${currentPrice.amount}`}</StyledProductPrice>
          </StyledAttribute>
          <StyledAddToCartButton disabled={!this.props.productDetails.inStock} onClick={() => this.props.dispatchAddToCart(productInCart)}>
            ADD TO CART
          </StyledAddToCartButton>
          <StyledAttribute>
            <StyledDescription dangerouslySetInnerHTML={{__html: this.props.productDetails.description}}/>
          </StyledAttribute>

        </StyledProductDetails>
      </StyledProductDescriptionPage>
    );
  }
}

export default ProductDescriptionPage;