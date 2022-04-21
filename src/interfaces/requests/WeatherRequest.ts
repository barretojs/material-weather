import Weather from "@interfaces/Weather";

type WeatherRequest = {
  dt: number;
  main: Weather;
};

export default WeatherRequest;
