import Position from "@interfaces/Position";
import { createSlice } from "@reduxjs/toolkit";

type PositionState = { position: null } | { position: Position };

const positionSlice = createSlice({
  name: "position",
  initialState: { position: null } as PositionState,
  reducers: {
    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const positionActions = positionSlice.actions;
export default positionSlice;
