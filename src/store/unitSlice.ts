import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "unit",
  initialState: { unit: { type: "metric", unit: "ºC" } },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const unitActions = unitSlice.actions;
export default unitSlice;
