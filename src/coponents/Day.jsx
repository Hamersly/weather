import { Container, Typography } from "@mui/material";

export const Day = ({ item }) => {
  const { dt, temp, weather } = item;

  const round = (number) => {
    return Math.round(number, -1);
  };

  const reformatDate = (date) => {
    const item = new Date(date * 1000);
    return [item.getDate(), item.getMonth() + 1].join(".");
  };

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // margin: "5px 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#679ED2" }} variant="h6" component="div">
          {reformatDate(dt)}
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#679ED2" }} variant="h6" component="div">
          {round(temp.day)}°/{round(temp.night)}°
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weatherImage"
        />
      </Container>
    </Container>
  );
};
