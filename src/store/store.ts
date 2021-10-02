import { combineReducers, configureStore } from "@reduxjs/toolkit";

import flowReducer from "./slices/flow";

const rootReducer = combineReducers({
    flowReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
