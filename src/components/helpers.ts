import {Product} from './ProductListingPage/ProductListingPage.types';
import {
  AttributeSet,
  ProductAttributeItems,
  ProductInCart
} from './ProductDescriptionPage/ProductDescriptionPage.types';

export function getTabLink(name: string) {
  if (name === 'all') {
    return '/';
  } else {
    return `categories/${name}`;
  }
}

export function getProductDescriptionPageLink(category: string, id: string) {
  return `/categories/${category}/${id}`;
}

export function getProductDescriptionPagePath(product: Product) {
  return getProductDescriptionPageLink(product.category, product.id);
}

export function getNumberOfItemsInTheCart(productsInCartWithCounter: ProductInCart[]) {
  return (productsInCartWithCounter).map((product) => {
    if(product.count) {
      return product.count;
    } else {
      return 0;
    }
  })?.reduce((prev, curr) => prev + curr, 0);
}

export function getIsSelected(product: ProductInCart, item: ProductAttributeItems, attribute: AttributeSet) {

  const itemInQuestion = product.selected.find((selectedItem) => (selectedItem.item.displayValue === item.displayValue) && (selectedItem.id === attribute.id));

  return !!itemInQuestion;
}

export function createDefaultAttrObj(attribute: AttributeSet) {
  return {
    id: attribute.id,
    item: {

      displayValue: attribute.items[0].displayValue,
      value: attribute.items[0].value,
      id: attribute.items[0].id,
      selected: true
    }
  };
}
