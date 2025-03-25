// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SeminarCreateType, SeminarType } from "../utils/types";

// Define a service using a base URL and expected endpoints
export const seminarApi = createApi({
  reducerPath: "seminarApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Seminars"],
  endpoints: (builder) => ({
    getAllSeminars: builder.query<SeminarType[], undefined>({
      query: () => "seminars/",
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Seminars", id } as const)),
              { type: "Seminars", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Seminars", id: "LIST" }],
    }),
    addSeminar: builder.mutation<undefined, SeminarCreateType>({
      query: (body) => ({
        url: `seminars/`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    }),
    removeSeminar: builder.mutation<string, string>({
      query: (id) => ({
        url: `seminars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    }),
    editSeminar: builder.mutation<string, SeminarCreateType>({
      query: (body) => ({
        url: `seminars/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: [{ type: "Seminars", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllSeminarsQuery,
  useAddSeminarMutation,
  useRemoveSeminarMutation,
  useEditSeminarMutation
} = seminarApi;
