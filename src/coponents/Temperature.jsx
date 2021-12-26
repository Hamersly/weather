import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParamsSelector } from "../store/selectors";

export const Temperature = () => {
  const weather = useSelector(weatherParamsSelector);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "30px",
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
