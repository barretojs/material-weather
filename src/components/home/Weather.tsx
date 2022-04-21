import {
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import classes from "@styles/Home.module.css";
import WeatherType from "@interfaces/Weather";
import WeatherRequest from "@interfaces/requests/WeatherRequest";
import Position from "@interfaces/Position";
import ConditionsReport from "./ConditionsReport";
import TemperatureReport from "./TemperatureReport";
import useOpenWeather from "@hooks/useOpenWeather";
import { useEffect } from "react";
import { weatherActions } from "@store/weatherSlice";
import Unit from "@interfaces/Unit";
import { State } from "@interfaces/State";
import { needsToUpdate } from "src/utils/utils";
import LocationName from "@components/shared/LocationName";

const Weather: React.VFC = () => {
  const {
    current,
    id,
  }: {
    current: WeatherType | null;
    id: string | null;
  } = useSelector((state: State) => state.weatherReducer.weather);

  const position: Position | null = useSelector(
    (state: State) => state.positionReducer.position
  );
  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  const { getCurrentWeather } = useOpenWeather();

  const dispatch = useDispatch();

  useEffect(() => {
    if (needsToUpdate(position, id)) {
      getCurrentWeather(position!.lat, position!.lon, unit.type).then(
        (resp: WeatherRequest) => {
          const weatherObject = {
            current: {
              ...resp.main,
            },
            id: `${position!.lat},${position!.lon}`,
          };

          dispatch(weatherActions.setCurrentWeather(weatherObject));
        }
      );
    }
  }, [position, unit]);

  return (
    <>
      {!!position && (
        <Box className={classes["weather-container"]}>
          <Container>
            <Card>
              <CardContent>
                <LocationName position={position} />
                <Divider sx={{ margin: "10px", background: "#cecece" }} />
                <Box
                  sx={{ flexGrow: 1 }}
                  className={classes["report-container"]}
                >
                  <TemperatureReport weather={current} />
                </Box>
                <Divider sx={{ margin: "10px", background: "#cecece" }} />
                <Box
                  sx={{ flexGrow: 1 }}
                  className={classes["report-container"]}
                >
                  <ConditionsReport weather={current} />
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Weather;
