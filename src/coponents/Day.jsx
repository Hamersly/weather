import { Container, Typography } from "@mui/material";
import { reformatDate } from "../utils/utils";

export const Day = ({ item }) => {
  const { dt, temp, weather } = item;

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#679ED2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
        variant="h6"
        component="div"
      >
        {reformatDate(dt)}
      </Typography>

      <Typography
        sx={{
          color: "#679ED2",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        variant="h6"
        component="div"
      >
        {Math.round(temp.day)}°...{Math.round(temp.night)}°
      </Typography>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weatherImage"
        />
      </Container>
    </Container>
  );
};
