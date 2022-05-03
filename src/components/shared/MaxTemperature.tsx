import { Grid, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import React from "react";
import Unit from "@interfaces/Unit";
import { useSelector } from "react-redux";
import { State } from "@interfaces/State";

type Props = {
  maxTemperature: number | undefined;
};

const MaxTemperature: React.FC<Props> = ({ maxTemperature }) => {
  const unit: Unit = useSelector((state: State) => state.unitReducer.unit);

  return (
    <Grid
      item
      xs={12}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      sx={{ color: "#e25822" }}
    >
      {!!maxTemperature && (
        <>
          <Grid item xs={6} md={6} textAlign="end">
            <LocalFireDepartmentIcon sx={{ padding: 2 }} />
          </Grid>
          <Grid item xs={6} md={6} textAlign="start">
            <Typography variant="h6" component="div">
              {Math.round(maxTemperature)} {unit.unit}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MaxTemperature;
