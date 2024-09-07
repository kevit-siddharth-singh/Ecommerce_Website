import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategory: string[];
}

const initialState: CategoryState = {
  selectedCategory: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // Add a new category to the array
    addCategory: (state, action: PayloadAction<string>) => {
        // console.log(state.selectedCategory);
      state.selectedCategory.push(action.payload);
    },

    // Remove a category by its name
    removeCategory: (state, action: PayloadAction<string>) => {
        // console.log(state.selectedCategory);
      state.selectedCategory = state.selectedCategory.filter(
        (cat) => cat !== action.payload
      );
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
