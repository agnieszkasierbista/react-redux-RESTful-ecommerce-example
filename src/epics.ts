import {combineEpics, Epic, ofType} from "redux-observable";
import {EMPTY, from, of, switchMap} from "rxjs";
import * as gql from 'gql-query-builder';
import {request} from 'graphql-request';
import {INIT, INIT_SUCCESS} from "./actions";

const {query} = gql.query([
    {
        operation: 'categories',
        fields: ['name',
            {
                products: [
                    'id',
                    'name'
                ]
            }]
    },
    {
        operation: 'currencies',
        fields: ['symbol', 'label']
    }
]);

export const epic: Epic = action$ => action$.pipe(
    switchMap(() => {
        return EMPTY
    })
);

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
                products: initialData[0].categories[0].products
            }
        })
    })
);


export const rootEpic = combineEpics(epic, onInit);