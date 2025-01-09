import { complexesApi } from "@/entities/complexes/api";
import { homeApi } from "@/shared/api/home";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [complexesApi.reducerPath]: complexesApi.reducer,
        [homeApi.reducerPath]: homeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([complexesApi.middleware, homeApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
