import MaxTemperature from "@components/shared/MaxTemperature";
import MinTemperature from "@components/shared/MinTemperature";
import useOpenWeather from "@hooks/useOpenWeather";
import { Daily } from "@interfaces/Forecast";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";

type Props = {
  forecast: Daily;
};

const ForecastItem: React.FC<Props> = ({ forecast }) => {
  const { getIcon } = useOpenWeather();

  return (
    <Grid item xs={12} md={2}>
      <Card>
        <CardContent>
          <Grid container direction="row">
            <Grid item xs={4} md={4}>
              <img src={getIcon(forecast.icon)} />
            </Grid>
            <Grid item xs={8} md={8} textAlign="start">
              <Typography variant="h6">
                {forecast.dtFormatted.split("/").slice(0, 2).join("/")}
              </Typography>
              <Typography variant="subtitle2">{forecast.condition}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ margin: "10px", background: "#cecece" }} />
          <Grid container direction="row">
            <MinTemperature minTemperature={forecast?.main?.temp_min} />
            <MaxTemperature maxTemperature={forecast?.main?.temp_max} />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ForecastItem;
