import { Container } from "@mui/material";
import { Header } from "../coponents/Header/Header";
import { InfoBlock } from "../coponents/InfoBlock/InfoBlock";

export const DayPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <InfoBlock />
    </Container>
  );
};
