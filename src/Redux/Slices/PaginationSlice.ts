import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage++;
    },
    prevPage: (state) => {
      state.currentPage--;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
