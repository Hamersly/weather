import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import {
  temperatureStyle,
  temperatureTypographyStyle,
} from "./Temperature.styles";

export const Temperature = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Container sx={temperatureStyle}>
      <Typography
        sx={temperatureTypographyStyle}
        variant="h1"
        component="div"
        gutterBottom
      >
        {!!weather.temp && weather.temp}
      </Typography>

      <Typography
        sx={temperatureTypographyStyle}
        variant="h4"
        component="div"
        gutterBottom
      >
        {!!weather.temp && "℃"}
      </Typography>
    </Container>
  );
};
