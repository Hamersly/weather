import { Container } from "@mui/material";
import { Header } from "../../coponents/Header/Header";
import { InfoBlock } from "../../coponents/InfoBlock/InfoBlock";
import { DayPageStyle } from "./DayPage.styles";

export const DayPage = () => {
  return (
    <Container sx={DayPageStyle}>
      <Header />
      <InfoBlock />
    </Container>
  );
};
