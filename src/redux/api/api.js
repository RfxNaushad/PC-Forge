import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  
  reducerPath: "api",
  
  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-builder-server-nu.vercel.app" }),

  endpoints: (builder) => ({
    getCPUs: builder.query({
      query: () => "/product",
    }),
  }),
});


export const { useGetCPUsQuery } = apiSlice;