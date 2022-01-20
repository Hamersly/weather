import { Container } from "@mui/material";
import { Point } from "../Point/Point";
import { Temperature } from "../Temperature/Temperature";
import { Condition } from "../Condition/Condition";
import { Wind } from "../Wind/Wind";
import { Humidity } from "../Humidity/Humidity";
import { Pressure } from "../Pressure/Pressure";
import { infoBlockStyles } from "./InfoBlock.styles";
import { Date } from "../Date/Date";

export const InfoBlock = () => {
  return (
    <Container sx={infoBlockStyles}>
      <Date />
      <Point />
      <Temperature />
      <Condition />
      <Wind />
      <Humidity />
      <Pressure />
    </Container>
  );
};
