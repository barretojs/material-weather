export const iconMock = "http://openweathermap.org/img/w/801.png";
export const mockLocations = [
  {
    name: "São José do Rio Preto",
    local_names: {
      pt: "São José do Rio Preto",
    },
    lat: -20.8125851,
    lon: -49.3804212,
    country: "BR",
    state: "São Paulo",
  },
  {
    name: "São José do Rio Preto",
    lat: -20.803,
    lon: -49.363068181818186,
    country: "BR",
    state: "São Paulo",
  },
  {
    name: "São José do Rio Preto",
    lat: -16.906663,
    lon: -43.257755,
    country: "BR",
    state: "Minas Gerais",
  },
];
export const mockErrorPosition = {
  cod: "400",
  message: "bad query",
};
export const mockForecasts = {
  hourly: [
    {
      dt: 1651406400,
      temp: 24.43,
      feels_like: 24.23,
      pressure: 1016,
      humidity: 50,
      dew_point: 13.34,
      uvi: 2.45,
      clouds: 4,
      visibility: 10000,
      wind_speed: 3.26,
      wind_deg: 17,
      wind_gust: 4.98,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1651417200,
      sunrise: 1651397663,
      sunset: 1651438480,
      moonrise: 1651399680,
      moonset: 1651440660,
      moon_phase: 0.02,
      temp: {
        day: 27.74,
        min: 18.82,
        max: 31.2,
        night: 21.66,
        eve: 24.84,
        morn: 20.73,
      },
      feels_like: {
        day: 27.38,
        night: 21.13,
        eve: 24.48,
        morn: 20.43,
      },
      pressure: 1015,
      humidity: 39,
      dew_point: 12.54,
      wind_speed: 3.53,
      wind_deg: 359,
      wind_gust: 5.34,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 5,
      pop: 0,
      uvi: 8.43,
    },
  ],
};
export const mockCurrentWeather = {
  dt: 1651407496,
  main: {
    temp: 296.3,
    temp_min: 296.3,
    temp_max: 296.3,
    pressure: 1018,
    humidity: 60,
  },
};
