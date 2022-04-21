import Position from "@interfaces/Position";
import { Typography } from "@mui/material";

type Props = {
  position: Position | null;
};

const LocationName: React.VFC<Props> = ({ position }) => {
  return (
    <Typography variant="h4" component="div" sx={{ margin: "10px" }}>
      {`${position?.name}, ${position?.state} - ${position?.country}`}
    </Typography>
  );
};

export default LocationName;
