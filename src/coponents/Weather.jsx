import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParamsSelector } from "../store/selectors";

export const Weather = () => {
  const weather = useSelector(weatherParamsSelector);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={1}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather && weather.weather}
    </Typography>
  );
};
