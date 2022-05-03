import {
  CircularProgress,
  Container,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import useDebounce from "@hooks/useDebounce";
import useOpenWeather from "@hooks/useOpenWeather";
import { positionActions } from "@store/positionSlice";
import { useDispatch } from "react-redux";
import AppMenu from "./Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlacesMenu from "./PlacesMenu";
import Position from "@interfaces/Position";
import { errorActions } from "@store/errorSlice";

const QueryInput: React.FC = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState<string>("");
  const [willSearch, setWillSearch] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [places, setPlaces] = useState<Position[]>([]);
  const inputRef = useRef(null);

  const debouncedQuery = useDebounce<string>(query, 1000);

  const { searchLocation } = useOpenWeather();

  const handleLocationChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setWillSearch(true);
    setQuery(event.currentTarget.value);
  };

  const openPlaces = () => {
    setAnchorEl(inputRef.current);
  };

  const handleClickPlace = (place: Position) => {
    setAnchorEl(null);

    setWillSearch(false);
    setQuery(`${place.name}, ${place.state} - ${place.country}`);

    dispatch(positionActions.setPosition(place));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (willSearch && query.length > 0) {
      setLoading(true);
      searchLocation(query)
        .then((resp: Position[]) => {
          setPlaces(resp);
          setAnchorEl(inputRef.current);
        })
        .catch((error: Error) => {
          dispatch(errorActions.setError({
            message: error.message
          }));
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (!query.length) setPlaces([]);
  }, [debouncedQuery]);

  return (
    <Container>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <AppMenu />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Open Weather"
          inputProps={{ "aria-label": "search open weather" }}
          value={query}
          onChange={handleLocationChange}
          ref={inputRef}
        />
        {!loading && !!places.length && (
          <IconButton data-cy="placesDropdown" onClick={openPlaces}>
            <KeyboardArrowDownIcon />
          </IconButton>
        )}
        {loading && <CircularProgress color="inherit" size={"1em"} />}
      </Paper>
      {!!places.length && (
        <PlacesMenu
          menuAnchor={anchorEl}
          open={open}
          handleClose={handleClose}
          places={places}
          handleClickPlace={handleClickPlace}
        />
      )}
    </Container>
  );
};

export default QueryInput;
