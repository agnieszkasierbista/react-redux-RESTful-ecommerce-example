import { combineEpics, Epic } from "redux-observable";

export const epic: Epic = action$ => action$.pipe();

export const rootEpic = combineEpics(epic);