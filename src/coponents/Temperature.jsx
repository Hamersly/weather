import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Temperature = () => {
  const weatherData = useSelector((state) => state.data);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "50px 0 30px 0",
      }}
    >
      <Typography
        sx={{ color: "#679ED2" }}
        variant="h1"
        component="div"
        gutterBottom
      >
        {weatherData.temp && Math.floor(weatherData.temp)}
      </Typography>
      <Typography
        sx={{ color: "#679ED2" }}
        variant="h4"
        component="div"
        gutterBottom
      >
        ℃
      </Typography>
    </Container>
  );
};
