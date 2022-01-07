import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { buttonBackStyle, containerButtonBackStyle } from "./ButtonBack.styles";

export const ButtonBack = () => {
  return (
    <Container sx={containerButtonBackStyle}>
      <Link className="link-button" to="/day">
        <Button sx={buttonBackStyle}>
          <h3>назад</h3>
        </Button>
      </Link>
    </Container>
  );
};
