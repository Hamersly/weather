import { Box } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";
import { headerStyles } from "./Header.styles";
import { useRef } from "react";
import { setPointInfo } from "../../store/weatherLayer/actions";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const textInput = useRef(null);
  const history = useHistory();

  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  function clearValue() {
    textInput.current.value = "";
  }

  return (
    <Box sx={headerStyles}>
      <Autocomplete
        apiKey={GOOGLE_API_KEY}
        className="autocomplete"
        onClick={clearValue}
        ref={textInput}
        autoFocus
        onPlaceSelected={(place) => {
          const { lat, lng } = place.geometry.location;
          const point = {
            pointName: place.address_components[0].long_name,
            lat: lat(),
            lon: lng(),
          };
          dispatch(setPointInfo(point));
          history.push("/day");
        }}
      />
    </Box>
  );
};
