import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParams } from "../store/selectors";

export const Humidity = () => {
  const weather = useSelector(weatherParams);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      Влажность: {weather.humidity} %
    </Typography>
  );
};
