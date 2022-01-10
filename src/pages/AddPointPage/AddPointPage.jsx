import { Header } from "../../coponents/Header/Header";
import { Container } from "@mui/material";
import { AddPointPageStyles } from "./AddPointPage.styles";

export const AddPointPage = () => {
  return (
    <Container maxWidth="100%" sx={AddPointPageStyles}>
      <Header />
    </Container>
  );
};
