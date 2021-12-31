import { Container } from "@mui/material";
import { ButtonBack } from "../coponents/ButtonBack/ButtonBack";
import { DaysList } from "../coponents/DaysList/DaysList";
import { WeekTitle } from "../coponents/WeekTitle/WeekTitle";

export const WeekPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WeekTitle />
      <DaysList />
      <ButtonBack />
    </Container>
  );
};
