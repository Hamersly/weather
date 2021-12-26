import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { todayParamsSelector } from "../store/selectors";

export const Wind = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather.wind >= 1
        ? `Ветер: ${Math.round(weather.wind, -1)} м/сек`
        : weather.wind && `Ветер: ${weather.wind} м/сек`}
    </Typography>
  );
};
