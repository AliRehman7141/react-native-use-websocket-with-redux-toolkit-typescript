import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPAddressSliceState, IPAddressData } from "utils/modals"; // Adjust the path based on your file structure

const initialState: IPAddressSliceState = {
  IPAddressData: null,
  activeImage: ""
};

const IPAddressSlice = createSlice({
  name: "ipAddress",
  initialState,
  reducers: {
    onChangeCurrentIPAddressData(
      state: IPAddressSliceState,
      action: PayloadAction<IPAddressData | null>
    ) {
      state.IPAddressData = action.payload;
    },
    onChangeActiveImage(
      state: IPAddressSliceState,
      action: PayloadAction<string>
    ) {
      state.activeImage = action.payload;
    },
  },
});

export const {
  onChangeCurrentIPAddressData,
  onChangeActiveImage
} = IPAddressSlice.actions;

export default IPAddressSlice.reducer;