import { WeatherState } from "@interfaces/State";
import { createSlice } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  weather: {
    id: null,
    current: null,
  },
  forecast: {
    id: null,
    hourly: null,
    daily: null,
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    clearWeather: (state) => {
      state.weather = initialState.weather;
      state.forecast = initialState.forecast;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice;
