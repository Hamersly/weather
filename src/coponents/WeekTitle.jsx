import { Typography } from "@mui/material";

export const WeekTitle = () => {
  return (
    <Typography
      sx={{ color: "#679ED2", textAlign: "center" }}
      mt={4}
      mb={4}
      variant="h4"
      component="div"
    >
      Прогноз на неделю
    </Typography>
  );
};
