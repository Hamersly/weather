import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../store/selectors";
import { Link } from "react-router-dom";

export const ButtonDaily = () => {
  const daily = useSelector(dailyParamsSelector);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {daily.length && (
        <Link className="link-button" to="/week">
          <Button variant="contained">Прогноз на неделю</Button>
        </Link>
      )}
    </Container>
  );
};
