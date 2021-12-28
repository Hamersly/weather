import { Avatar, Container, Typography } from "@mui/material";

export const Day = ({ item }) => {
  const { dt, temp, weather } = item;

  const reformatDate = (date) => {
    const item = new Date(date * 1000);
    return [item.getDate(), item.getMonth() + 1].join(".");
  };

  const style = {
    color: "#679ED2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
        borderBottom: "1px solid #679ed2",
      }}
    >
      <Typography sx={style} variant="h6" component="div">
        {reformatDate(dt)}
      </Typography>

      <Typography sx={style} variant="h6" component="div">
        {Math.round(temp.day)}°...{Math.round(temp.night)}°
      </Typography>

      <Container disableGutters={true} sx={style}>
        <Avatar
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weatherIcon"
        />
      </Container>
    </Container>
  );
};
