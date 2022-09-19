import {combineEpics, Epic, ofType} from 'redux-observable';
import {from, of, switchMap} from 'rxjs';
import * as gql from 'gql-query-builder';
import {request} from 'graphql-request';
import {
  ADD_TO_CART_BY_PRODUCT_ID,
  addToCart,
  GET_PRODUCT_DETAILS,
  getProductDetailsSuccess,
  INIT,
  initSuccess
} from './actions';
import {createDefaultAttrObj} from './components/helpers';
import {InitialData, ProductInCart, Selected} from './types';
import {AnyAction} from '@reduxjs/toolkit';

function getQueryDetails(action: AnyAction) {
  const queryDetails = gql.query([{
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

  return queryDetails;
}

const {query} = gql.query([
  {
    operation: 'categories',
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
  {
    operation: 'currencies',
    fields: ['symbol', 'label']
  }
]);


export const onInit: Epic = action$ => action$.pipe(
  ofType(INIT),
  switchMap(() => {
    return from(
      Promise.all([request('http://localhost:4000', query)])
    );
  }),
  switchMap((initialData: InitialData) => {
    return of(initSuccess(initialData));
  })
);

export const onGetProductDetails: Epic = action$ => action$.pipe(
  ofType(GET_PRODUCT_DETAILS),
  switchMap((action) => {
    return from(
      request('http://localhost:4000', getQueryDetails(action).query, getQueryDetails(action).variables)
    );
  }),
  switchMap((productDetails) => {
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


export const rootEpic = combineEpics(onInit, onGetProductDetails, onAddToCartByProductId);