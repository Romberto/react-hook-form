// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SeminarType } from '../utils/types'


// Define a service using a base URL and expected endpoints
export const seminarApi = createApi({
  reducerPath: 'seminarApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllSeminars: builder.query<SeminarType[], undefined>({
      query: () => `seminars/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSeminarsQuery } = seminarApi