import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "35px 0",
      }}
    >
      <Autocomplete
        className="autocomplete"
        onPlaceSelected={(place) => {
          console.log(place.address_components[0].long_name);
          const coordinates = [
            place.geometry.location.lat(),
            place.geometry.location.lng(),
          ];
          console.log(coordinates);
        }}
      />
      <AddIcon
        sx={{ fontSize: 40 }}
        onClick={() => dispatch({ type: "TEST_SAGA" })}
      />
    </Container>
  );
};
