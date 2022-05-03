import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to={"/"}>
          Current Weather
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"/forecast"}>
          5-day forecast
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={"/daily-evolution"}
        >
          Daily Evolution
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppMenu;
