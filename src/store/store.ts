// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from './api'
import userReducer from './reducer'

export const store = configureStore({
  reducer: combineReducers({ user: userReducer, [apiSlice.reducerPath]: apiSlice.reducer }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
