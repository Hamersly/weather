import { Container } from "@mui/material";
import { InfoBlock } from "../../coponents/InfoBlock/InfoBlock";
import { DayPageStyle } from "./DayPage.styles";
import { AddPointLink } from "../../coponents/AddPointLink/AddPointLink";

export const DayPage = () => {
  return (
    <Container sx={DayPageStyle}>
      <AddPointLink />
      <InfoBlock />
    </Container>
  );
};
