import React from "react";

import { useAppDispatch, useAppSelector } from "../Redux/store";
import { categoryActions } from "../Redux/Slices/CategorySlice";

const Checkboxes: React.FC<{ category: string }> = ({ category }) => {
  const dispatch = useAppDispatch();

  // Access current selected categories from the Redux store
  const selectedCategories = useAppSelector(
    (state) => state.category.selectedCategory
  );

  // Check if the category is currently selected (checked)
  const isChecked = selectedCategories.includes(category);

  // Handle checkbox change (add or remove category)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(categoryActions.addCategory(category)); // Add category if checked
    } else {
      dispatch(categoryActions.removeCategory(category)); // Remove category if unchecked
    }
  };

  return (
    <div className="m-4 text-white">
      
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="space-y-2">
          <label
            htmlFor={category}
            className="flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition hover:bg-slate-900/100 has-[:checked]:text-white"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-5 accent-green-400"
                id={category}
                checked={isChecked} // Set checked state based on Redux store
                onChange={handleCheckboxChange} // Handle change
              />
            </div>

            <div>
              <strong className="font-medium">{category}</strong>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkboxes;
