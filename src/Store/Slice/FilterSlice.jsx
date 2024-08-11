import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    checked: (state, action) => {
      state.push(action.payload);
    },
    unchecked: (state, action) => {
      return state.filter((value) => value != action.payload);
    },
    clearAll: (state, action) => {
      if (action.payload == "clear all") {
        state.splice(0, state.length);
      }
    },
  },
});
export const { checked, unchecked, clearAll } = FilterSlice.actions;
export default FilterSlice.reducer;
