import { configureStore } from "@reduxjs/toolkit";
import { seminarApi } from "../servises/seminars";

// ...
export const store = configureStore({
  reducer: {
    [seminarApi.reducerPath]: seminarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(seminarApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
