import Weather from "@interfaces/Weather";
import { Container, Grid, Typography } from "@mui/material";

import ThermostatIcon from "@mui/icons-material/Thermostat";

import MaxTemperature from "@components/shared/MaxTemperature";
import MinTemperature from "@components/shared/MinTemperature";
import { useSelector } from "react-redux";
import Unit from "@interfaces/Unit";
import { State } from "@interfaces/State";

type Props = {
  weather: Weather | null;
};

const TemperatureReport: React.FC<Props> = ({ weather }) => {
  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  return (
    <Container>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={8} justifyContent="space-around">
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={2}>
              <ThermostatIcon />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="h6" component="div" noWrap>
                Current Temperature
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="div">
            {!!weather?.temp && Math.round(weather.temp)} {unit.unit}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <MinTemperature minTemperature={weather?.temp_min} />
          <MaxTemperature maxTemperature={weather?.temp_max} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TemperatureReport;
