import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    ...rootReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
