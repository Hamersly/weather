import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import { humidityStyles } from "./Humidity.styles";

export const Humidity = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Typography sx={humidityStyles} variant="h5" component="div" gutterBottom>
      {weather.humidity && `Влажность: ${weather.humidity} %`}
    </Typography>
  );
};
