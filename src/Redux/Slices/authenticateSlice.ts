import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
type AuthenticateState = {
  isAuthenticate: Boolean;
  name: string;
};

const initialState: AuthenticateState = {
  isAuthenticate: false,
  name: "",
};

const authenticateSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    setAuthentication: (
      state,
      action: PayloadAction<{ isAuthenticate: Boolean; name: string }>
    ) => {
      (state.isAuthenticate = action.payload.isAuthenticate),
        (state.name = action.payload.name);
    },
  },
});

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
