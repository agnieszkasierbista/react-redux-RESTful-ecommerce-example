import {AttributeSet, Currency, Price, Product, ProductAttributeItems, ProductDetails, ProductInCart} from '../types';

export function getTabLink(name: string) {
  if (name === '1') {
    return '/';
  } else {
    return `categories/${name}`;
  }
}

export function getTabPath(name: string) {
  if (name === '1') {
    return '/';
  } else {
    return `/categories/${name}`;
  }
}

export function getProductDescriptionPageLink(category: string, id: string) {
  return `/categories/${category}/${id}`;
}

export function getProductDescriptionPagePath(product: Product) {
  return `/categories/${product.category}/${product.id}`;
}

export function getNumberOfItemsInTheCart(productsInCartWithCounter: ProductInCart[]) {
  return (productsInCartWithCounter).map((product) => {
    if (product.count) {
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

export function findPrice(product: ProductDetails, currentCurrency: Currency): Price {
  return product.prices.find((price) => price.currency.label === currentCurrency.label) || {
    currency: {symbol: 'PLN', label: 'PLN'},
    amount: 0
  };
}
