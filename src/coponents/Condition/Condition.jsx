import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../../store/weatherLayer/selectors";
import { conditionStyles, conditionTypographyStyles } from "./Condition.styles";

export const Condition = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Container sx={conditionStyles}>
      <Typography
        sx={conditionTypographyStyles}
        variant="h5"
        component="div"
        gutterBottom
      >
        {weather && weather.description}
      </Typography>
    </Container>
  );
};
