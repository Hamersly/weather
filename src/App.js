import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { DayPage } from "./pages/DayPage/DayPage";
import { useDispatch, useSelector } from "react-redux";
import { weatherParamsSelector } from "./store/weatherLayer/selectors";
import { useEffect } from "react";
import { setPointInfo } from "./store/weatherLayer/actions";
import { AddPointPage } from "./pages/AddPointPage/AddPointPage";
import { selectedFon } from "./utils/utils";
import { Box } from "@mui/material";

export default function App() {
  const weather = useSelector(weatherParamsSelector);
  const dispatch = useDispatch();

  const status = weather.today.main;

  const { pointName, lat, lon } = weather.point;

  const oldParams = {
    pointName,
    lat,
    lon,
  };

  useEffect(() => {
    dispatch(setPointInfo(oldParams));
  }, []);

  useEffect(() => localStorage.setItem("weather", JSON.stringify(weather)));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100%",
        backgroundImage: selectedFon(status),
      }}
    >
      <HashRouter>
        <Switch>
          <Route exact path="/day">
            <DayPage />
          </Route>
          <Route exact path="/add_point">
            <AddPointPage />
          </Route>
          <Redirect to="/day" />
        </Switch>
      </HashRouter>
    </Box>
  );
}
