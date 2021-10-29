import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    searchAnywhere: builder.query({
      query: (value) => `/search?search=${value}`,
    }),
  }),
});

export const { useSearchAnywhereQuery } = apiSlice;
