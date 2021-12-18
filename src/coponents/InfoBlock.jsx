import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Point } from "./Point";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export const InfoBlock = () => {
  const weatherInfo = useSelector((state) => state.info);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("weather", JSON.stringify(weatherInfo));
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
    </Container>
  );
};
