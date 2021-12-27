import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Point } from "./Point";
import { Temperature } from "./Temperature";
import { Condition } from "./Condition";
import { Wind } from "./Wind";
import { weatherParamsSelector } from "../store/selectors";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";
import { setPointInfo } from "../store/weatherSlice";
import { ButtonDaily } from "./ButtonDaily";

export const InfoBlock = () => {
  const weather = useSelector(weatherParamsSelector);
  const dispatch = useDispatch();

  const oldParams = {
    pointName: weather.point.pointName,
    locationLat: weather.point.locationLat,
    locationLng: weather.point.locationLng,
  };

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
    if (oldParams.pointName) dispatch(setPointInfo(oldParams));
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Point />
      <Temperature />
      <Condition />
      <Wind />
      <Humidity />
      <Pressure />
      <ButtonDaily />
    </Container>
  );
};
