import {
    configureStore,
    Store,
    AnyAction,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit'
import GlobalConfigDataStore from "./GlobalConfigDataStore/GlobalConfigDataStore";

const reducer = combineReducers({
    GlobalConfigDataStore
}) as Reducer

export const store: Store<any,AnyAction> = configureStore({
    reducer
})


export type RootState = ReturnType<typeof store.getState>

export type Action = {
    payload: Record<string, unknown>
    type: string
}
