import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: {
      message: null
    }
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = {
        message: null
      }
    }
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice;
