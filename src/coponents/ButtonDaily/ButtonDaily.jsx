import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../../store/weatherLayer/selectors";
import { Link } from "react-router-dom";
import { buttonDailyStyles } from "./ButtonDaily.styles";

export const ButtonDaily = () => {
  const daily = useSelector(dailyParamsSelector);

  return (
    <Container sx={buttonDailyStyles}>
      {daily.length && (
        <Link className="link-button" to="/week">
          <Button variant="contained">Прогноз на неделю</Button>
        </Link>
      )}
    </Container>
  );
};
