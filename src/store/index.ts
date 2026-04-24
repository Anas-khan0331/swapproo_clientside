import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
<<<<<<< HEAD
import counterReducer from "./slices/counterSlice";
=======
import authReducer from "@/features/auth/store/authSlice";
import tradeInReducer from "@/features/trade-in/store/tradeInSlice";
>>>>>>> a877bab (Restructue Swapproo)

export const makeStore = () =>
  configureStore({
    reducer: {
<<<<<<< HEAD
      counter: counterReducer,
=======
      auth: authReducer,
      tradeIn: tradeInReducer,
>>>>>>> a877bab (Restructue Swapproo)
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { setupListeners };
