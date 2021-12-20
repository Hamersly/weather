import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Point } from "./Point";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import { Wind } from "./Wind";
import { weatherParams } from "../store/selectors";
import { getData, setDataLocalStorage } from "../store/api";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";

export const InfoBlock = () => {
  const weather = useSelector(weatherParams);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("weather", JSON.stringify(weather));
    setDataLocalStorage(getData);
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
