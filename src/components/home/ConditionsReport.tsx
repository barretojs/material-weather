import Weather from "@interfaces/Weather";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import React from "react";

type Props = {
  weather: Weather | null;
};

const ConditionsReport: React.FC<Props> = ({ weather }) => {
  return (
    <Container>
      <Grid container direction="row" justifyContent="space-around" spacing={2}>
        <Grid item xs={12} md={4} justifyContent="space-around">
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={2}>
              <WaterIcon />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="h6" component="div" noWrap>
                Humidity
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="div">
            {weather?.humidity}%
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} justifyContent="space-around">
          <Grid container direction="row">
            <Grid item xs={12} sm={2}>
              <AirIcon />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Box>
                <Typography variant="h6" component="div">
                  Pressure
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h6" component="div">
            {weather?.pressure} hPa
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(ConditionsReport);
