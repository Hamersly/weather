import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Point } from "../Point/Point";
import { Temperature } from "../Temperature/Temperature";
import { Condition } from "../Condition/Condition";
import { Wind } from "../Wind/Wind";
import { dailyParamsSelector } from "../../store/weatherLayer/selectors";
import { Humidity } from "../Humidity/Humidity";
import { Pressure } from "../Pressure/Pressure";
import { ButtonDaily } from "../ButtonDaily/ButtonDaily";
import { infoBlockStyles } from "./InfoBlock.styles";

export const InfoBlock = () => {
  const weather = useSelector(dailyParamsSelector);

  return (
    <Container sx={infoBlockStyles}>
      <Point />
      <Temperature />
      <Condition />
      <Wind />
      <Humidity />
      <Pressure />

      {!!weather.length && <ButtonDaily />}
    </Container>
  );
};
