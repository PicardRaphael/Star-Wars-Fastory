import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    searchAnywhere: builder.query({
      query: (value) => `/search?search=${value}`,
    }),
    detail: builder.query({
      query: (body) => ({
        url: `/detail`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSearchAnywhereQuery, useDetailQuery } = apiSlice;
