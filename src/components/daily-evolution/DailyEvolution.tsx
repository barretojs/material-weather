import LocationName from "@components/shared/LocationName";
import useOpenWeather from "@hooks/useOpenWeather";
import { Daily, Hourly } from "@interfaces/Forecast";
import Position from "@interfaces/Position";
import ForecastRequest from "@interfaces/requests/ForecastRequest";
import { State } from "@interfaces/State";
import Unit from "@interfaces/Unit";
import { Container, Typography } from "@mui/material";
import { weatherActions } from "@store/weatherSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTimeString, needsToUpdate } from "src/utils/utils";
import DailyEvolutionGraph from "./DailyEvolutionGraph";

const DailyEvolution: React.VFC = () => {
  const position: Position | null = useSelector(
    (state: State) => state.positionReducer.position
  );

  const {
    hourly,
    id,
  }: {
    hourly: Hourly[] | null;
    id: string | null;
  } = useSelector((state: State) => state.weatherReducer.forecast);

  const dispatch = useDispatch();

  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  const { getForecast } = useOpenWeather();

  useEffect(() => {
    if (needsToUpdate(position, id)) {
      getForecast(position!.lat, position!.lon, unit.type).then(
        (resp: ForecastRequest) => {
          const daily = resp.daily.slice(0, 5).map((forecastItem: Daily) => {
            return {
              dt: forecastItem.dt * 1000,
              dtFormatted: new Date(
                forecastItem.dt * 1000
              ).toLocaleDateString(),
              main: {
                temp_max: forecastItem.temp.max,
                temp_min: forecastItem.temp.min,
              },
              condition: forecastItem.weather[0].description,
              icon: forecastItem.weather[0].icon,
            };
          });

          const hourly = resp.hourly.slice(0, 24).map((evolution: Hourly) => {
            return {
              dt: evolution.dt * 1000,
              dtFormatted: formatTimeString(
                new Date(evolution.dt * 1000).toLocaleTimeString()
              ),
              temp: evolution.temp,
            };
          });

          const weatherForecast = {
            id: `${position?.lat},${position?.lon}`,
            daily,
            hourly,
          };

          dispatch(weatherActions.setForecast(weatherForecast));
        }
      );
    }
  }, [position, unit]);

  return (
    <>
      {!!hourly?.length && (
        <Container sx={{ height: "400px", marginTop: "40px" }}>
          <LocationName position={position} />
          <DailyEvolutionGraph data={hourly} unit={unit} />
        </Container>
      )}
    </>
  );
};

export default DailyEvolution;
