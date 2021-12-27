import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

export const ButtonBack = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
      }}
    >
      <Link className="link-button" to="/weather">
        <Button variant="contained">назад</Button>
      </Link>
    </Container>
  );
};
