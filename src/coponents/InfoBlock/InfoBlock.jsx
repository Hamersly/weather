import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Point } from "../Point/Point";
import { Temperature } from "../Temperature/Temperature";
import { Condition } from "../Condition/Condition";
import { Wind } from "../Wind/Wind";
import { weatherParamsSelector } from "../../store/weatherLayer/selectors";
import { Humidity } from "../Humidity/Humidity";
import { Pressure } from "../Pressure/Pressure";
import { setPointInfo } from "../../store/weatherLayer/weatherSlice";
import { ButtonDaily } from "../ButtonDaily/ButtonDaily";
import { infoBlockStyles } from "./InfoBlock.styles";

export const InfoBlock = () => {
  const weather = useSelector(weatherParamsSelector);
  const { pointName, locationLat, locationLng } = weather.point;
  const dispatch = useDispatch();

  const oldParams = {
    pointName: pointName,
    locationLat: locationLat,
    locationLng: locationLng,
  };

  useEffect(() => {
    if (!!oldParams.pointName) dispatch(setPointInfo(oldParams));
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  });

  return (
    <Container sx={infoBlockStyles}>
      <Point />
      <Temperature />
      <Condition />
      <Wind />
      <Humidity />
      <Pressure />

      {!!weather.daily.length && <ButtonDaily />}
    </Container>
  );
};
