import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import { pressureStyles } from "./Pressure.styles";

export const Pressure = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Typography sx={pressureStyles} variant="h5" component="div" gutterBottom>
      {!!weather.pressure && `Давление: ${weather.pressure} мм.рт.ст`}
    </Typography>
  );
};
