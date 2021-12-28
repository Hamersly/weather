import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { pointParamsSelector } from "../store/selectors";

export const Point = () => {
  const point = useSelector(pointParamsSelector);

  return (
    <Typography
      sx={{ color: "#679ED2", textAlign: "center" }}
      variant="h4"
      component="div"
      gutterBottom
    >
      {point.pointName}
    </Typography>
  );
};
