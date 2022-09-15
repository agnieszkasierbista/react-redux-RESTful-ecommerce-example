import {combineEpics, Epic, ofType} from 'redux-observable';
import {from, of, switchMap} from 'rxjs';
import * as gql from 'gql-query-builder';
import {request} from 'graphql-request';
import {
  ADD_TO_CART,
  ADD_TO_CART_BY_PRODUCT_ID, ADD_TO_CART_BY_PRODUCT_ID_SUCCESS, addToCart,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  INIT,
  INIT_SUCCESS
} from './actions';
import {Category} from './components/CategoryTabs/CategoryTabs.types';
import {createDefaultAttrObj} from './components/helpers';
import {ProductInCart, Selected} from './components/ProductDescriptionPage/ProductDescriptionPage.types';

const {query} = gql.query([
  {
    operation: 'categories',
    fields: ['name',
      {
        products: [
          'id',
          'name',
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
  switchMap((initialData) => {
    return of({
      type: INIT_SUCCESS,
      payload: {
        categories: initialData[0].categories,
        currencies: initialData[0].currencies,
        products: initialData[0].categories.find((category: Category) => category.name === 'all').products
      }
    });
  })
);

export const onGetProductDetails: Epic = action$ => action$.pipe(
  ofType(GET_PRODUCT_DETAILS),
  switchMap((action) => {
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
    return from(
      request('http://localhost:4000', queryDetails.query, queryDetails.variables)
    );
  }),
  switchMap((productDetails) => {
    return of({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: productDetails
    });
  })
);

export const onAddToCartByProductId : Epic = action$ => action$.pipe(
  ofType(ADD_TO_CART_BY_PRODUCT_ID),
  switchMap((action) => {
    console.log('action', action.payload);

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
    return from(
      request('http://localhost:4000', queryDetails.query, queryDetails.variables)
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