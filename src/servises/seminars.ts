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
      query: () => `seminars/`,
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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSeminarsQuery, useAddSeminarMutation } = seminarApi;
