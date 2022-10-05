import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import { dateStyle } from "./Date.styles";

export const Date = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Typography sx={dateStyle} variant="h5" component="div" gutterBottom>
      {weather.dt && weather.dt}
    </Typography>
  );
};
