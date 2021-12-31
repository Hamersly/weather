import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { buttonBackStyle } from "./ButtonBack.styles";

export const ButtonBack = () => {
  return (
    <Container sx={buttonBackStyle}>
      <Link className="link-button" to="/day">
        <Button variant="contained">назад</Button>
      </Link>
    </Container>
  );
};
