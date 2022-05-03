import Position from "@interfaces/Position";
import { Menu, MenuItem } from "@mui/material";

type Props = {
  menuAnchor: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  places: Position[];
  handleClickPlace: (place: Position) => void;
};

const PlacesMenu: React.FC<Props> = ({
  menuAnchor,
  open,
  handleClose,
  places,
  handleClickPlace,
}) => {
  return (
    <Menu
      id="cities-menu"
      anchorEl={menuAnchor}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "cities-menu",
      }}
      sx={{
        width: "100%",
      }}
      disableRestoreFocus={true}
    >
      {places.map((place: Position, ix: number) => {
        return (
          <MenuItem
            data-cy={`place${ix}`}
            onClick={() => handleClickPlace(place)}
            key={`${place.lat},${place.lon}`}
          >
            {place.name}, {place.state} - {place.country}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default PlacesMenu;
