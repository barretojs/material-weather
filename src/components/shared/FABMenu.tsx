import { Fab, Menu, MenuItem } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Unit from "@interfaces/Unit";
import { unitActions } from "@store/unitSlice";
import { weatherActions } from "@store/weatherSlice";
import { State } from "@interfaces/State";

const FABMenu = () => {
  const currentUnit: Unit = useSelector(
    (state: State) => state.unitReducer.unit
  );

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (unit: Unit) => {
    const changedUnit = unit.unit;

    if (changedUnit) {
      if (changedUnit !== currentUnit.unit) {
        dispatch(weatherActions.clearWeather());
      }
      dispatch(unitActions.setUnit(unit));
    }

    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        data-cy="fab"
        color="primary"
        aria-label="change unit"
        sx={{ position: "fixed", bottom: "2%", right: "2%" }}
        onClick={handleClick}
      >
        <ThermostatIcon />
      </Fab>
      <Menu
        id="unit-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "unit menu",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          data-cy="metric"
          onClick={() => handleClose({ type: "metric", unit: "ºC" })}
        >
          Celsius (ºC)
        </MenuItem>
        <MenuItem
          data-cy="imperial"
          onClick={() => handleClose({ type: "imperial", unit: "ºF" })}
        >
          Fahrenheit (ºF)
        </MenuItem>
      </Menu>
    </>
  );
};

export default FABMenu;
