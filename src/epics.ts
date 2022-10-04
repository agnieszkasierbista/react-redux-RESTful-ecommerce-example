import {combineEpics, Epic, ofType} from 'redux-observable';
import {from, of, switchMap} from 'rxjs';
import * as gql from 'gql-query-builder';
import {request} from 'graphql-request';
import {
  ADD_TO_CART_BY_PRODUCT_ID,
  addToCart,
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAILS, getProductsListSuccess,
  getProductDetailsSuccess,
  INIT,
  initSuccess
} from './actions';
import {createDefaultAttrObj} from './components/helpers';
import {InitialData, Product, ProductDetails, ProductInCart, Selected} from './types';
import {AnyAction} from '@reduxjs/toolkit';

function getQueryDetails(action: AnyAction) {
  return gql.query([{
    operation: 'product',
    variables: {id: {value: action.payload, required: true}},
    fields: ['id', 'name', 'description', 'inStock', 'gallery',
      {
        attributes: ['id', 'name', 'type', {items: ['displayValue', 'value', 'id']}],
      },
      'brand', {
        prices: [
          {
            currency: [
              'symbol',
              'label'
            ]
          },
          'amount'
        ]
      },]
  }]);
}


const {query} = gql.query([
  {
    operation: 'categories',
    fields: ['name']
  },
  {
    operation: 'currencies',
    fields: ['symbol', 'label']
  }
]);

function getProductListQueryDetails(action: AnyAction) {

  return gql.query([
    {
      operation: 'category',
      variables: {
        input: { value : {
          title: action.payload
        },
        type: 'CategoryInput'
        }
      },
      fields: ['name',
        {
          products: [
            'id',
            'name',
            'brand',
            {
              prices: [
                {
                  currency: [
                    'symbol',
                    'label'
                  ]
                },
                'amount'
              ]
            },
            'category',
            'gallery',
            'inStock'
          ]
        }]
    },
  ]);
}

export const onInit: Epic = action$ => action$.pipe(
  ofType(INIT),
  switchMap(() => {
    return from(
      Promise.all([request('http://localhost:4000', query)])
    );
  }),
  switchMap((initialData: InitialData) => {
    return of(initSuccess(initialData, window.location.pathname));
  })
);

export const onGetProductsList: Epic = action$ => action$.pipe(
  ofType(GET_PRODUCTS_LIST),
  switchMap((action) => {
    return from(
      request(
        'http://localhost:4000',
        getProductListQueryDetails(action).query,
        getProductListQueryDetails(action).variables)
    );
  }),
  switchMap((initialProductList: {category: { products: Product[] }}) => {
    return of(getProductsListSuccess(initialProductList));
  })
);

export const onGetProductDetails: Epic = action$ => action$.pipe(
  ofType(GET_PRODUCT_DETAILS),
  switchMap((action) => {
    console.log(getQueryDetails(action).query, getQueryDetails(action).variables);
    return from(
      request('http://localhost:4000', getQueryDetails(action).query, getQueryDetails(action).variables)
    );
  }),
  switchMap((productDetails: { product: ProductDetails }) => {
    return of(getProductDetailsSuccess(productDetails));
  })
);

export const onAddToCartByProductId: Epic = action$ => action$.pipe(
  ofType(ADD_TO_CART_BY_PRODUCT_ID),
  switchMap((action) => {

    return from(
      request('http://localhost:4000', getQueryDetails(action).query, getQueryDetails(action).variables)
    );
  }),
  switchMap(({product}) => {

    const defaultAttrs: Selected[] = product.attributes.map(createDefaultAttrObj);

    const productToCart: ProductInCart = {
      ...product,
      selected: defaultAttrs
    };

    return of(addToCart(productToCart));
  })
);


export const rootEpic = combineEpics(
  onInit,
  onGetProductDetails,
  onAddToCartByProductId,
  onGetProductsList);