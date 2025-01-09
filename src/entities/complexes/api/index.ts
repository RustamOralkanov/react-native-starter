import { BASE_URL } from "@/shared/contants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Complex, ComplexesRoot } from "../types";

export const complexesApi = createApi({
    reducerPath: "complexesApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getComplexes: builder.query<Complex[], void>({
            query: () => {
                return {
                    url: `/home-projects`,
                };
            },
            transformResponse: (response: ComplexesRoot) => response.projects,
        }),
    }),
});

export const { useGetComplexesQuery } = complexesApi;
