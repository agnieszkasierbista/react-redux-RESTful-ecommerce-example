import React, {PropsWithChildren, PureComponent, RefObject} from 'react';
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
import {ProductDetails, ProductInCart, Selected} from '../../types';

export class ProductDescriptionPage extends PureComponent<PropsWithChildren<ProductDescriptionPageProps>> {

    ref: RefObject<HTMLDivElement> = React.createRef();

    domParser = new DOMParser();

    componentDidMount() {
      this.props.dispatchGetProductDetails((this.props.pathName).split('/')[3]);
    }

    componentDidUpdate(prevProps: ProductDescriptionPageProps) {
      if (prevProps.productDetails.description !== this.props.productDetails.description) {
        const descriptionAsElement = this.domParser.parseFromString(
          `<span>${this.props.productDetails.description}</span>`,
          'text/html'
        );

        [...descriptionAsElement.body.children].forEach((child) => {
          this.ref.current?.append?.(child);
        });
      }
    }

    componentWillUnmount() {
      this.props.dispatchClearSelectedAttributes();
    }


    render() {

      const currentPrice = findPrice(this.props.productDetails, this.props.currentCurrency);
      const defaultAttributes: Selected[] = this.props.productDetails.attributes.map(createDefaultAttrObj);

      const productToCart: ProductInCart = {...this.props.productDetails, selected: this.props.selected};

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
                      {`${attribute.name}:`}
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
                            isSelected={getIsSelected(productToCart, item, attribute)}
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
                      {`${attribute.name}:`}
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
                            isSelected={getIsSelected(productToCart, item, attribute)}
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

            <StyledAddToCartButton
              disabled={!this.props.productDetails.inStock}
              onClick={() => this.props.dispatchAddToCart(productInCart)}
            >
                        ADD TO CART
            </StyledAddToCartButton>

            <StyledAttribute>
              <StyledDescription ref={this.ref}>
              </StyledDescription>
            </StyledAttribute>
          </StyledProductDetails>
        </StyledProductDescriptionPage>
      );
    }
}

export default ProductDescriptionPage;