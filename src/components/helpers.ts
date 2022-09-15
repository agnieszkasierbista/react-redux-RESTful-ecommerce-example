import {Product} from './ProductListingPage/ProductListingPage.types';
import {ProductAttributeItems, ProductDetails, ProductInCart} from './ProductDescriptionPage/ProductDescriptionPage.types';

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

export function getIsSelected(product: ProductInCart, item: ProductAttributeItems) {

  const itemInQuestion = product.selected.find((selectedItem) => selectedItem.item.displayValue === item.displayValue);

  return !!itemInQuestion;
}