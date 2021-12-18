import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export const Wind = () => {
  const weatherData = useSelector((state) => state.data);
  return (
    <Typography
      sx={{ color: "#679ED2" }}
      mt={4}
      variant="h5"
      component="div"
      gutterBottom
    >
      {weatherData.wind >= 1 &&
        `Ветер ${Math.floor(weatherData.wind, -1)} м/сек`}
    </Typography>
  );
};
