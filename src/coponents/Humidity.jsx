import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParamsSelector } from "../store/selectors";

export const Humidity = () => {
  const weather = useSelector(weatherParamsSelector);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather.humidity && `Влажность: ${weather.humidity} %`}
    </Typography>
  );
};
