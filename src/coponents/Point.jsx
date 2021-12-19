import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { weatherParams } from "../store/selectors";

export const Point = () => {
  const weather = useSelector(weatherParams);
  return (
    <Typography
      sx={{ color: "#679ED2", textAlign: "center" }}
      variant="h3"
      component="div"
      gutterBottom
    >
      {weather.pointName}
    </Typography>
  );
};
