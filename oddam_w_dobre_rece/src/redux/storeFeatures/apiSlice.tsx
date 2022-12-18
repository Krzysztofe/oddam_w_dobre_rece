import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {URL_allData} from "../../data/URL";

export const summaryApi = createApi({
    reducerPath: 'summary',
    baseQuery: fetchBaseQuery({baseUrl: URL_allData}),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: () => 'db/summary'
        })
    })
})

export const {useGetSummaryQuery} = summaryApi