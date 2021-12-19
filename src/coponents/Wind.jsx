import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { weatherParams } from "../store/selectors";

export const Wind = () => {
  const weather = useSelector(weatherParams);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weather.wind >= 1 && `Ветер ${Math.floor(weather.wind, -1)} м/сек`}
    </Typography>
  );
};
