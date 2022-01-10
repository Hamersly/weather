import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AddPointLinkIconStyles,
  AddPointLinkStyles,
} from "./AddPointLink.styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const AddPointLink = () => {
  return (
    <Container sx={AddPointLinkStyles}>
      <Link className="link-button" to="/add_point">
        <AddCircleIcon sx={AddPointLinkIconStyles} />
      </Link>
    </Container>
  );
};
