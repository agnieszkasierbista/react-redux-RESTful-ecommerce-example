import {combineEpics, Epic} from "redux-observable";
import {EMPTY, switchMap} from "rxjs";

export const epic: Epic = action$ => action$.pipe(
   switchMap(() => {
      return  EMPTY
    })
);

export const rootEpic = combineEpics(epic);