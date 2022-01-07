import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../../store/weatherLayer/selectors";
import { Link } from "react-router-dom";
import {
  buttonDailyStyles,
  containerButtonDailyStyles,
} from "./ButtonDaily.styles";

export const ButtonDaily = () => {
  const daily = useSelector(dailyParamsSelector);

  return (
    <Container sx={containerButtonDailyStyles}>
      {daily.length && (
        <Link className="link-button" to="/week">
          <Button sx={buttonDailyStyles}>
            <h3>Прогноз на неделю</h3>
          </Button>
        </Link>
      )}
    </Container>
  );
};
