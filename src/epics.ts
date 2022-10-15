import {combineEpics, Epic, ofType} from 'redux-observable';
import {of, switchMap} from 'rxjs';
import axios from 'axios';
import {GET_PRODUCTS_LIST, getProductsListSuccess, INIT, initSuccess} from './actions';
import {InitialData, InitialDataDirty, Product} from './types';

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
  switchMap((initialData: InitialDataDirty) => {
    const restOfCategories = initialData?.map((item) => item.userId)
      .reduce(
        (unique: number[], item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      )
      .map((number) => JSON.stringify(number))
      .map((nameValue) => {
        return {name: nameValue, products: []};
      });
    const categories = [{name: 'all', products: []}].concat(restOfCategories);
    const currencies = [{symbol: 'PLN', label: 'PLN'}, {symbol: 'ABC', label: 'ABC'}, {
      symbol: 'XYZ',
      label: 'XYZ'
    }];
    const initialDataClean: InitialData = [{categories, currencies}];
    return of(initSuccess(initialDataClean, window.location.pathname));
  })
);

export const onGetProductsList: Epic = (action$, state$) => action$.pipe(
  ofType(GET_PRODUCTS_LIST),
  switchMap((action) => {
    const namesOfCategories = state$.value.categoryTabs.categories.map(({name}: { name: string }) => name).filter((name: string) => name !== 'all');

    const reqOne = axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`);
    const reqTwo = axios.get('https://jsonplaceholder.typicode.com/photos');

    const reqs = (
      (action.payload === 'all')
        ? [namesOfCategories.map((x: string) => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}/comments`)), reqTwo].flat()
        : [reqOne, reqTwo]
    );

    return axios.all(reqs)
      .then(axios.spread((...responses) => {
        return [...responses];
        // use/access the results
      }))
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }),
  switchMap((responses: any) => {
    const receivedDataOne = responses.length === 2 ? responses[0].data : responses.map((response: any, idx: number) => {
      if(idx <= responses.length - 2) {
        return response.data;
      } else {
        return null;
      }
    }).filter((x:any) => x).flat();
    const receivedDataTwo = responses[responses.length - 1].data;
    const actionPayload = responses.length === 2 ? responses[0].config.url.split('/')[4] : 'all';
    // {name: string, id: string, prices: Price[], category: string, gallery: string[], inStock: boolean, brand: string}
    // [
    //   {
    //     'postId': 1,
    //     'id': 1,
    //     'name': 'id labore ex et quam laborum',
    //     'email': 'Eliseo@gardner.biz',
    //     'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    //   },
    // ];

    function getMockedGallery(product: any) {
      return (receivedDataTwo.map((item: any) => {
        if (item.albumId == product.id) {
          return item.url;
        } else {
          return null;
        }
      })).filter((x: any) => x);
    }

    const xyz = receivedDataOne.map((product: any) => {
      return {
        name: product.name,
        id: JSON.stringify(product.id),
        prices: [
          {currency: {symbol: 'PLN', label: 'PLN'}, amount: 100},
          {currency: {symbol: 'ABC', label: 'ABC'}, amount: 200},
          {currency: {symbol: 'XYZ', label: 'XYZ'}, amount: 300}
        ],
        category: actionPayload,
        gallery: getMockedGallery(product),
        inStock: true,
        brand: product.email
      };

    });

    const initialProductList: { category: { products: Product[] } } = {
      category:
                {
                  products: xyz
                }
    };
    return of(getProductsListSuccess(initialProductList));
  })
);

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
  onGetProductsList
);
