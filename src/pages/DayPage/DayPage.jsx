import { Box } from "@mui/material";
import { InfoBlock } from "../../coponents/InfoBlock/InfoBlock";
import { DayPageStyle } from "./DayPage.styles";
import { AddPointLink } from "../../coponents/AddPointLink/AddPointLink";
import { WeekTitle } from "../../coponents/WeekTitle/WeekTitle";
import { DaysList } from "../../coponents/DaysList/DaysList";

export const DayPage = () => {
  return (
    <Box sx={DayPageStyle}>
      <AddPointLink />
      <InfoBlock />
      <WeekTitle />
      <DaysList />
    </Box>
  );
};
