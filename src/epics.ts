import {combineEpics, Epic, ofType} from 'redux-observable';
import {of, switchMap} from 'rxjs';
import axios from 'axios';
import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_LIST,
  getProductDetailsSuccess,
  getProductsListSuccess,
  INIT,
  initSuccess
} from './actions';
import {AttributeSet, InitialData, InitialDataDirty, Product, ProductAttributeItems, ProductDetails} from './types';

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
      if (idx <= responses.length - 2) {
        return response.data;
      } else {
        return null;
      }
    }).filter((x: any) => x).flat();
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
        name: product.name.split(' ')[0],
        id: JSON.stringify(product.id),
        prices: [
          {currency: {symbol: 'PLN', label: 'PLN'}, amount: 100},
          {currency: {symbol: 'ABC', label: 'ABC'}, amount: 200},
          {currency: {symbol: 'XYZ', label: 'XYZ'}, amount: 300}
        ],
        category: actionPayload,
        gallery: getMockedGallery(product),
        inStock: true,
        brand: product.email.split('@')[0]
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

export const onGetProductDetails: Epic = action$ => action$.pipe(
  ofType(GET_PRODUCT_DETAILS),
  switchMap((action) => {
    console.log(action.payload);
    const reqOne = axios.get(`https://jsonplaceholder.typicode.com/comments/${action.payload}`);
    const reqTwo = axios.get('https://jsonplaceholder.typicode.com/photos');

    return axios.all([reqOne, reqTwo])
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

    const responseOne = responses[0];
    const responseTwo = responses[1];
    // export interface ProductDetails {
    //   productId: string,
    //   name: string,
    //   description: string,
    //   gallery: string[],
    //   brand: string,
    //   prices: Price[],
    //   attributes: AttributeSet[],
    //   inStock: boolean
    //
    // }

    // {
    //   "postId": 8,
    //     "id": 36,
    //     "name": "sit et quis",
    //     "email": "Raheem_Heaney@gretchen.biz",
    //     "body": "aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae"
    // }

    //
    // export interface AttributeSet {
    //   id: string,
    //   name: string,
    //   type: string
    //   items: ProductAttributeItems[]
    // }
    const mockedAttributes: AttributeSet[] = responseOne.data.body.split(' ').map((word: string) => {
      return {
        id: word,
        name: word,
        type: word,
        items: [{displayValue: word + 1,
          value: word + 1,
          id: word + 1}, {displayValue: word + 2,
          value: word + 2,
          id: word + 2}, {displayValue: word + 3,
          value: word + 3,
          id: word + 3}]
      };
    }).splice(0, 4);


    function getMockedGallery(productId: any) {
      return (responseTwo.data.map((item: any) => {
        if (item.albumId == productId) {
          return item.url;
        } else {
          return null;
        }
      })).filter((x: any) => x).filter((x: any, idx: number) => idx <= 5);
    }

    const actionPayload = responseOne.config.url.split('/')[responseOne.config.url.split('/').length - 1];
    console.log(actionPayload);
    const data = responseOne.data;
    console.log('data', data);
    const productDetails: { product: ProductDetails } = {
      product: {
        name: data.name.split(' ')[0],
        productId: JSON.stringify(data.id),
        prices: [
          {currency: {symbol: 'PLN', label: 'PLN'}, amount: 100},
          {currency: {symbol: 'ABC', label: 'ABC'}, amount: 200},
          {currency: {symbol: 'XYZ', label: 'XYZ'}, amount: 300}
        ],
        gallery: getMockedGallery(actionPayload),
        inStock: true,
        brand: data.email.split('@')[0],
        description: data.body,
        attributes: mockedAttributes
      }
    };

    return of(getProductDetailsSuccess(productDetails));
  })
);
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
  onGetProductDetails,
  // onAddToCartByProductId,
  onGetProductsList
);
