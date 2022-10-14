import {combineEpics, Epic, ofType} from 'redux-observable';
import {of, switchMap} from 'rxjs';
import axios from 'axios';
import {INIT, initSuccess} from './actions';
import {InitialData} from './types';

// function getQueryDetails(action: AnyAction) {
//   return gql.query([{
//     operation: 'product',
//     variables: {id: {value: action.payload, required: true}},
//     fields: ['id', 'name', 'description', 'inStock', 'gallery',
//       {
//         attributes: ['id', 'name', 'type', {items: ['displayValue', 'value', 'id']}],
//       },
//       'brand', {
//         prices: [
//           {
//             currency: [
//               'symbol',
//               'label'
//             ]
//           },
//           'amount'
//         ]
//       },]
//   }]);
// }
//
//
// const {query} = gql.query([
//   {
//     operation: 'categories',
//     fields: ['name']
//   },
//   {
//     operation: 'currencies',
//     fields: ['symbol', 'label']
//   }
// ]);
//
// function getProductListQueryDetails(action: AnyAction) {
//
//   return gql.query([
//     {
//       operation: 'category',
//       variables: {
//         input: { value : {
//           title: action.payload
//         },
//         type: 'CategoryInput'
//         }
//       },
//       fields: ['name',
//         {
//           products: [
//             'id',
//             'name',
//             'brand',
//             {
//               prices: [
//                 {
//                   currency: [
//                     'symbol',
//                     'label'
//                   ]
//                 },
//                 'amount'
//               ]
//             },
//             'category',
//             'gallery',
//             'inStock'
//           ]
//         }]
//     },
//   ]);
// }
const getOptions =  {
  method: 'get',
};

export const onInit: Epic = action$ => action$.pipe(
  ofType(INIT),
  switchMap(() => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }),
  switchMap((initialData: InitialData) => {
    return of(initSuccess(initialData, window.location.pathname));
  })
);

// export const onGetProductsList: Epic = action$ => action$.pipe(
//   ofType(GET_PRODUCTS_LIST),
//   switchMap((action) => {
//     return from(
//       request(
//         'http://localhost:4000',
//         getProductListQueryDetails(action).query,
//         getProductListQueryDetails(action).variables)
//     );
//   }),
//   switchMap((initialProductList: {category: { products: Product[] }}) => {
//     return of(getProductsListSuccess(initialProductList));
//   })
// );
//
// export const onGetProductDetails: Epic = action$ => action$.pipe(
//   ofType(GET_PRODUCT_DETAILS),
//   switchMap((action) => {
//     return from(
//       request('http://localhost:4000', getQueryDetails(action).query, getQueryDetails(action).variables)
//     );
//   }),
//   switchMap((productDetails: { product: ProductDetails }) => {
//     return of(getProductDetailsSuccess(productDetails));
//   })
// );
//
// export const onAddToCartByProductId: Epic = action$ => action$.pipe(
//   ofType(ADD_TO_CART_BY_PRODUCT_ID),
//   switchMap((action) => {
//
//     return from(
//       request('http://localhost:4000', getQueryDetails(action).query, getQueryDetails(action).variables)
//     );
//   }),
//   switchMap(({product}) => {
//
//     const defaultAttrs: Selected[] = product.attributes.map(createDefaultAttrObj);
//
//     const productToCart: ProductInCart = {
//       ...product,
//       selected: defaultAttrs
//     };
//
//     return of(addToCart(productToCart));
//   })
// );


export const rootEpic = combineEpics(
  onInit,
  // onGetProductDetails,
  // onAddToCartByProductId,
  // onGetProductsList
);
