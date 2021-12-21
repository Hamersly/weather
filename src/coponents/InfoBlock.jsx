import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Point } from "./Point";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import { Wind } from "./Wind";
import { weatherParamsSelector } from "../store/selectors";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";

export const InfoBlock = () => {
  const weather = useSelector(weatherParamsSelector);
  const dispatch = useDispatch();

  const oldParams = {
    pointName: weather.pointName,
    locationLat: weather.locationLat,
    locationLng: weather.locationLng,
  };

  useEffect(() => {
    dispatch({ type: "SET_POINT_INFO", payload: oldParams });
    localStorage.clear();
    localStorage.setItem("weather", JSON.stringify(weather));
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
      <Weather />
      <Wind />
      <Humidity />
      <Pressure />
    </Container>
  );
};
