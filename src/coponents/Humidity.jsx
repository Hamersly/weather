import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector, weatherParamsSelector } from "../store/selectors";

export const Humidity = () => {
  const weather = useSelector(todayParamsSelector);

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
