import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface checkoutType {
  name: string;
  phn: string;
  address: string;
  modeofpayment: string;
}

const initialState: checkoutType = {
  address: "",
  modeofpayment: "",
  name: "",
  phn: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    changeAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    changeModeOfPayment: (state, action: PayloadAction<string>) => {
      state.modeofpayment = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changePhn: (state, action: PayloadAction<string>) => {
      state.phn = action.payload;
    },
    reset: (state) => {
      state.address = "";
      state.modeofpayment = "";
      state.name = "";
      state.phn = "";
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer;
