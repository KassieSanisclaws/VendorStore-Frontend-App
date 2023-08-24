import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./features/exampleSlice/counterSlice/counter";
import authSlice from "./features/slices/authSlice/authSlice";
import userSlice from "./features/slices/userSlice/userSlice";
import vendorSlice from "./features/slices/vendorSlice/vendorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    user: userSlice,
    vendor: vendorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
