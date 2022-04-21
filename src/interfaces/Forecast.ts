import Weather from "./Weather";

type WeatherForecast = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Temperature = {
  max: number;
  min: number;
};

export type Daily = {
  dt: number;
  dtFormatted: string;
  condition: string;
  icon: string;
  main: Weather;
  temp: Temperature;
  weather: WeatherForecast[];
};

export type Hourly = {
  dt: number;
  dtFormatted: string;
  temp: number;
};
