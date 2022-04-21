import CurrentWeatherPage from "@pages/CurrentWeather";
import DailyEvolution from "@pages/DailyEvolution";
import ForecastPage from "@pages/Forecast";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<CurrentWeatherPage />} />
      <Route path="/forecast" element={<ForecastPage />} />
      <Route path="/daily-evolution" element={<DailyEvolution />} />
    </Routes>
  );
};

export default AppRoutes;
