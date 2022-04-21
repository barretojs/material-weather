import { Daily, Hourly } from "@interfaces/Forecast";

type ForecastRequest = {
  daily: Daily[];
  hourly: Hourly[];
};

export default ForecastRequest;
