import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { pointParamsSelector } from "../../store/weatherLayer/selectors";
import { pointStyles } from "./Point.styles";

export const Point = () => {
  const point = useSelector(pointParamsSelector);

  return (
    <Typography sx={pointStyles} variant="h4" component="div" gutterBottom>
      {point.pointName}
    </Typography>
  );
};
