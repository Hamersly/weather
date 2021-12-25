import { Container } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";
import { setPointInfo } from "../store/weatherSlice";

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
        onClick={clearValue}
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