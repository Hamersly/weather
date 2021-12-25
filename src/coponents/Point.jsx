import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {weatherParamsSelector} from "../store/selectors";

export const Point = () => {
  const weather = useSelector(weatherParamsSelector);

  return (
    <Typography
      sx={{color: "#679ED2", textAlign: "center"}}
      variant="h3"
      component="div"
      gutterBottom
    >
      {weather.pointName}
    </Typography>
  );
};
