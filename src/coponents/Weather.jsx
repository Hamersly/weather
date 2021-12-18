import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Weather = () => {
  const weatherData = useSelector((state) => state.data);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={1}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weatherData && weatherData.weather}
    </Typography>
  );
};
