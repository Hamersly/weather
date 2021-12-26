import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../store/selectors";

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
      {daily.length && <Button variant="contained"> Прогноз на неделю </Button>}
    </Container>
  );
};
