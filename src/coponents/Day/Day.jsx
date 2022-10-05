import { Avatar, Container, Typography } from "@mui/material";
import { dayComponentStyles, dayStyles } from "./Day.styles";

export const Day = ({ item }) => {
  const { dt, temp, weather } = item;

  return (
    <Container sx={dayStyles}>
      <Typography sx={dayComponentStyles} variant="h5" component="div">
        {dt}
      </Typography>

      <Typography sx={dayComponentStyles} variant="h5" component="div">
        {temp.day}°...{temp.night}°
      </Typography>

      <Container disableGutters={true} sx={dayComponentStyles}>
        <Avatar
          src={
            weather[0].icon === "13d"
              ? "/weather/img/snejinka.png"
              : `https://openweathermap.org/img/wn/${weather[0].icon}.png`
          }
          alt="weatherIcon"
        />
      </Container>
    </Container>
  );
};
