import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export type AuthenticateState = {
  isAuthenticate: Boolean;
  name: string;
  email: string;
};

const initialState: AuthenticateState = {
  isAuthenticate: false,
  name: "",
  email: "",
};

const authenticateSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    setAuthentication: (
      state,
      action: PayloadAction<{
        isAuthenticate: Boolean;
        name: string;
        email: string;
      }>
    ) => {
      (state.isAuthenticate = action.payload.isAuthenticate),
        (state.name = action.payload.name);
      state.email = action.payload.email;
    },
  },
});

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
