import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParamsSelector } from "../store/selectors";

export const Pressure = () => {
  const weather = useSelector(weatherParamsSelector);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather.pressure &&
        `Давление: ${Math.round(weather.pressure / 1.33322)} мм.рт.ст`}
    </Typography>
  );
};
