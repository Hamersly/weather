import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todayParamsSelector } from "../store/selectors";

export const Condition = () => {
  const weather = useSelector(todayParamsSelector);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#679ED2" }}
        // mt={1}
        variant="h5"
        component="div"
        gutterBottom
      >
        {weather && weather.condition}
      </Typography>
    </Container>
  );
};
