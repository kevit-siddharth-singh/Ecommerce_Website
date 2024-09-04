import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export type AuthenticateState = {
  isAuthenticate: boolean;
  name: string;
  email: string;
  profile: string;
  password: string;
  signupsuccess: boolean;
};

const initialState: AuthenticateState = {
  isAuthenticate: false,
  name: "",
  email: "",
  profile: "",
  password: "",
  signupsuccess: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setAuthentication: (
      state,
      action: PayloadAction<{
        isAuthenticate: boolean;
        name: string;
        email: string;
        password: string;
        signupsuccess: boolean;
      }>
    ) => {
      state.isAuthenticate = action.payload.isAuthenticate;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.signupsuccess = action.payload.signupsuccess;
    },

    setLogin: (state, action: PayloadAction<{ isAuthenticate: boolean }>) => {
      console.log(state.profile);

      state.isAuthenticate = action.payload.isAuthenticate;
    },
    setLogout: (state) => {
      state.isAuthenticate = false;
      state.signupsuccess = false;
    },
    setProfile: (state, action: PayloadAction<{ profile: string }>) => {
      state.profile = action.payload.profile;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
