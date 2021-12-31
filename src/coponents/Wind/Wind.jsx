import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import { windTypographyStyle } from "./Wind.styles";

export const Wind = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Typography
      sx={windTypographyStyle}
      variant="h5"
      component="div"
      gutterBottom
    >
      {!!weather.wind
        ? `Ветер: ${weather.wind} м/сек`
        : weather.wind === 0 && "Ветра нет"}
    </Typography>
  );
};
