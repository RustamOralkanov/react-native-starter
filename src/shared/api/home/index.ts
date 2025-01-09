import { BASE_URL } from "@/shared/contants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HomeSections } from "./types";

export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getHome: builder.query<HomeSections, void>({
            query: () => {
                return {
                    url: `/home`,
                };
            },
        }),
    }),
});

export const { useGetHomeQuery } = homeApi;
