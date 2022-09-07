import {combineEpics, Epic, ofType} from "redux-observable";
import {EMPTY, of, switchMap, from} from "rxjs";
import * as gql from 'gql-query-builder';
import { request } from 'graphql-request';

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

export const abc: Epic = action$ => action$.pipe(
    ofType('TOGGLE_CURRENCY_DROPDOWN_VISIBILITY'),
    switchMap(() => {
        return from(request('http://localhost:4000', query))
    }),
    switchMap((abc) => {
        console.log("abc", abc)
        return of({type: "XYZ", payload: abc})
    })
);


export const rootEpic = combineEpics(epic, abc);