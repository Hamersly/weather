import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Point = () => {
  const weatherInfo = useSelector((state) => state.info);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      variant="h3"
      component="div"
      gutterBottom
    >
      {weatherInfo.pointName}
    </Typography>
  );
};
