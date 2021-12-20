import { Container } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const clearValue = () => {
    document.querySelector(".autocomplete").value = "";
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0 35px 0",
      }}
    >
      <Autocomplete
        className="autocomplete"
        onClick={() => clearValue()}
        onPlaceSelected={(place) => {
          const point = {
            address: place.address_components[0].long_name,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          dispatch({ type: "SET_POINT_INFO", payload: point });
        }}
      />
    </Container>
  );
};
