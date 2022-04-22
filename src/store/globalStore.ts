import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./errorSlice";
import positionSlice from "./positionSlice";
import unitSlice from "./unitSlice";
import weatherSlice from "./weatherSlice";

const globaStore = configureStore({
  reducer: {
    positionReducer: positionSlice.reducer,
    weatherReducer: weatherSlice.reducer,
    unitReducer: unitSlice.reducer,
    errorReducer: errorSlice.reducer,
  },
});

export default globaStore;
