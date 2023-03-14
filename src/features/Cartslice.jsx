import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export let Cartslice = createApi({
  reducerPath: "cartslice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({
        url: "api",
        method: "GET",
      }),
    }),
  }),
});

export let { useGetDataQuery } = Cartslice;
