import { Box, Typography } from "@mui/material";

import classes from "@styles/Home.module.css";

const Header: React.FC = () => {
  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h1">React Weather</Typography>
        <Typography variant="subtitle1">
          A simple weather app built with React
        </Typography>
      </Box>
    </>
  );
};

export default Header;
