import {combineEpics, Epic, ofType} from "redux-observable";
import {EMPTY, of, switchMap, from} from "rxjs";
import * as gql from 'gql-query-builder';
import { request } from 'graphql-request';
import {INIT, INIT_SUCCESS} from "./actions";

const {query} = gql.query({
    operation: 'categories',
    fields: ['name']
})

// console.log(query)

// request('http://localhost:4000', query).then((data) => console.log(data))

export const epic: Epic = action$ => action$.pipe(
   switchMap(() => {
      return  EMPTY
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
        console.log("abc", initialData)
        return of({type: INIT_SUCCESS, payload: {categories: initialData[0].categories}})
    })
);


export const rootEpic = combineEpics(epic, onInit);