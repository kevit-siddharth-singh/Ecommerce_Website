import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export type AuthenticateState = {
  isAuthenticate: Boolean;
  name: string;
  email: string;
  password: string;
};

const initialState: AuthenticateState = {
  isAuthenticate: false,
  name: "",
  email: "",
  password: "",
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
        password: string;
      }>
    ) => {
      (state.isAuthenticate = action.payload.isAuthenticate),
        (state.name = action.payload.name);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    setLogin: (state, action: PayloadAction<{ isAuthenticate: Boolean }>) => {
      state.isAuthenticate = action.payload.isAuthenticate;
    },
  },
});

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
