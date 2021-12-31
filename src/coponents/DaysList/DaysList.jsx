import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { dailyParamsSelector } from "../../store/weatherLayer/selectors";
import { Day } from "../Day/Day";
import { TitleParams } from "../TitleParams/TitleParams";
import { daysListStyles } from "./DaysList.styles";

export const DaysList = () => {
  const daily = useSelector(dailyParamsSelector);

  return (
    <Container disableGutters={true} sx={daysListStyles}>
      <TitleParams />

      {daily.map((item) => (
        <Day item={item} key={item.dt} />
      ))}
    </Container>
  );
};
