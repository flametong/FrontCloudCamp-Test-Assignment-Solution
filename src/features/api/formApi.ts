import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { FormRequestPayload } from "../../data/interfaces"

export const formApi = createApi({
    reducerPath: "formApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.sbercloud.ru" }),
    endpoints: (builder) => ({
        postFormData: builder.mutation({
            query: (payload: FormRequestPayload) => ({
                url: "content/v1/bootcamp/frontend",
                method: "POST",
                body: payload
            })
        })
    })
})

export const {
    usePostFormDataMutation
} = formApi