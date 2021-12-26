import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector, weatherParamsSelector } from "../store/selectors";

export const Temperature = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{ color: "#679ED2" }}
        variant="h1"
        component="div"
        gutterBottom
      >
        {weather.temp && Math.round(weather.temp)}
      </Typography>
      <Typography
        sx={{ color: "#679ED2" }}
        variant="h4"
        component="div"
        gutterBottom
      >
        {weather.temp && "℃"}
      </Typography>
    </Container>
  );
};
