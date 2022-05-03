import API from "../Axios";
import WeatherRequest from "@interfaces/requests/WeatherRequest";
import ForecastRequest from "@interfaces/requests/ForecastRequest";
import Position from "@interfaces/Position";

const useOpenWeather = () => {
  const getCurrentWeather = async (lat: number, lon: number, units: string) => {
    const queryParams = {
      units,
      lat,
      lon,
      appid: process.env.REACT_APP_API_KEY,
    };

    try {
      const response = await API.get<WeatherRequest>("/data/2.5/weather", {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      throw new Error(
        "Error fetching weather data",
      );
    }
  };

  const searchLocation = async (q: string | undefined) => {
    const queryParams = {
      q,
      limit: 5,
      appid: process.env.REACT_APP_API_KEY,
    };

    try {
      const response = await API.get<Position[]>("/geo/1.0/direct", {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      throw new Error(
        "Error searching for location",
      );
    }
  };

  const getForecast = async (lat: number, lon: number, units: string) => {
    const queryParams = {
      units,
      lat,
      lon,
      appid: process.env.REACT_APP_API_KEY,
    };

    try {
      const response = await API.get<ForecastRequest>("/data/2.5/onecall", {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      throw new Error(
        "Error fetching forecast data",
      );
    }
  };

  const getIcon = (icon: string | undefined) => {
    return icon ? `http://openweathermap.org/img/w/${icon}.png` : undefined;
  };

  return { getCurrentWeather, searchLocation, getForecast, getIcon };
};

export default useOpenWeather;
