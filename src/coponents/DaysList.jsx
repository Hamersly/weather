import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../store/selectors";
import { Day } from "./Day";
import { TitleParams } from "./TitleParams";

export const DaysList = () => {
  const daily = useSelector(dailyParamsSelector);

  return (
    <Container
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleParams />

      {daily.map((item) => (
        <Day item={item} key={item.dt} />
      ))}
    </Container>
  );
};
