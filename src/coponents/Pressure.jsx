import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../store/weatherLayer/selectors";

export const Pressure = () => {
  const weather = useSelector(todayParamsSelector);
  const press = Math.round(weather.pressure / 1.33322);

  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      mb={5}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather.pressure && `Давление: ${press} мм.рт.ст`}
    </Typography>
  );
};
