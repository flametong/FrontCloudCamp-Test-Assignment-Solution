import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/slices/formSlice"
import { formApi } from "../features/api/formApi"

export const store = configureStore({
    reducer: {
        form: formSlice,
        [formApi.reducerPath]: formApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(formApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch