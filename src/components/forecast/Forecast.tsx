import useOpenWeather from "@hooks/useOpenWeather";
import Position from "@interfaces/Position";
import { Daily, Hourly } from "@interfaces/Forecast";
import { Grid } from "@mui/material";
import { weatherActions } from "@store/weatherSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";
import Unit from "@interfaces/Unit";
import { formatTimeString, needsToUpdate } from "src/utils/utils";
import ForecastRequest from "@interfaces/requests/ForecastRequest";
import { State } from "@interfaces/State";
import LocationName from "@components/shared/LocationName";

const Forecast: React.FC = () => {
  const position: Position | null = useSelector(
    (state: State) => state.positionReducer.position
  );

  const {
    daily,
    id,
  }: {
    daily: Daily[] | null;
    id: string | null;
  } = useSelector((state: State) => state.weatherReducer.forecast);

  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  const { getForecast } = useOpenWeather();

  const dispatch = useDispatch();

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
      <LocationName position={position} />
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        sx={{ marginTop: "10px" }}
      >
        {daily?.map((forecastItem: Daily) => {
          return <ForecastItem key={forecastItem.dt} forecast={forecastItem} />;
        })}
      </Grid>
    </>
  );
};

export default Forecast;
