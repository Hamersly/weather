import { Typography } from "@mui/material";
import { weekTitleTypographyStyle } from "./WeekTitle.styles";

export const WeekTitle = () => {
  return (
    <Typography sx={weekTitleTypographyStyle} variant="h4" component="div">
      Прогноз на неделю
    </Typography>
  );
};
