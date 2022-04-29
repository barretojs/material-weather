import { Grid, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React from "react";
import Unit from "@interfaces/Unit";
import { useSelector } from "react-redux";
import { State } from "@interfaces/State";

type Props = {
  minTemperature: number | undefined;
};

const MinTemperature: React.VFC<Props> = ({ minTemperature }) => {
  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  return (
    <Grid container direction="row" spacing={1}>
      <Grid
        item
        xs={12}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        sx={{ color: "#006BCE" }}
      >
        {!!minTemperature && (<>
          <Grid item xs={6} md={6} textAlign="end">
            <AcUnitIcon sx={{ padding: 2 }} />
          </Grid>
          <Grid item xs={6} md={6} textAlign="start">
            <Typography variant="h6" component="div">
              {Math.round(minTemperature)} {unit.unit}
            </Typography>
          </Grid>
        </>)}
      </Grid>
    </Grid>
  );
};

export default MinTemperature;
