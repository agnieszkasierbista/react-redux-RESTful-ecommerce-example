import {Product} from './ProductListingPage/ProductListingPage.types';

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