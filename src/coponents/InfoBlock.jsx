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

export const InfoBlock = () => {
  const weather = useSelector(weatherParamsSelector);
  const localParams = JSON.parse(localStorage.getItem("weather"));
  const dispatch = useDispatch();

  const oldParams = {
    pointName: weather.pointName,
    locationLat: weather.locationLat,
    locationLng: weather.locationLng,
  };

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
    if (localParams && localParams.pointName) {
      dispatch(setPointInfo(oldParams));
    }
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
    </Container>
  );
};
