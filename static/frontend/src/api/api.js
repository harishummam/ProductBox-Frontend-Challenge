import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsAPI = createApi({
  reducerPath: "itemsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
      providesTags: ["Items"],
    }),
    addItem: builder.mutation({
      query: (item) => ({
        url: "/items",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation } = itemsAPI;
