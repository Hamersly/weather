import { Container } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";
import { setPointInfo } from "../../store/weatherLayer/weatherSlice";
import { headerStyles } from "./Header.styles";
import { useRef } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const textInput = useRef(null);

  function clearValue() {
    textInput.current.value = "";
  }

  return (
    <Container sx={headerStyles}>
      <Autocomplete
        className="autocomplete"
        onClick={clearValue}
        ref={textInput}
        onPlaceSelected={(place) => {
          const point = {
            pointName: place.address_components[0].long_name,
            locationLat: place.geometry.location.lat(),
            locationLng: place.geometry.location.lng(),
          };
          dispatch(setPointInfo(point));
        }}
      />
    </Container>
  );
};
