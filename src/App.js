import "./App.css";
import { Header } from "./coponents/Header";
import { InfoBlock } from "./coponents/InfoBlock";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <InfoBlock />
    </Container>
  );
}
