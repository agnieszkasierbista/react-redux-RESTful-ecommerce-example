import {combineEpics, Epic, ofType} from "redux-observable";
import {EMPTY, from, of, switchMap} from "rxjs";
import * as gql from 'gql-query-builder';
import {request} from 'graphql-request';
import {INIT, INIT_SUCCESS} from "./actions";
import {Category} from "./components/CategoryTabs/CategoryTabs.types";

const {query} = gql.query([
    {
        operation: 'categories',
        fields: ['name',
            {
                products: [
                    'id',
                    'name',
                    {prices: [
                            {currency: [
                                'symbol',
                                    'label'
                                ]},
                            'amount'
                        ]},
                    'category'
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
        )
    }),
    switchMap((initialData) => {
        console.log(initialData)
        return of({
            type: INIT_SUCCESS,
            payload: {
                categories: initialData[0].categories,
                currencies: initialData[0].currencies,
                products: initialData[0].categories.find((category: Category) => category.name === "all").products
            }
        })
    })
);


export const rootEpic = combineEpics(onInit);