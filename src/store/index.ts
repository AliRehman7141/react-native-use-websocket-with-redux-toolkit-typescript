import { configureStore } from "@reduxjs/toolkit";
import ipAddressSlice from "./reducers/IPAddressSlice";

const store = configureStore({
  reducer: {
    IPAddressSlice: ipAddressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
