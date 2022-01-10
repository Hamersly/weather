import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { DayPage } from "./pages/DayPage/DayPage";
import { WeekPage } from "./pages/WeekPage/WeekPage";
import { useDispatch, useSelector } from "react-redux";
import { weatherParamsSelector } from "./store/weatherLayer/selectors";
import { useEffect } from "react";
import { setPointInfo } from "./store/weatherLayer/actions";
import { AddPointPage } from "./pages/AddPointPage/AddPointPage";
import { selectedFon } from "./utils/utils";
import { Container } from "@mui/material";

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
    <Container
      maxWidth="100%"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        backgroundImage: selectedFon(status),
        padding: "0",
      }}
    >
      <HashRouter>
        <Switch>
          <Route exact path="/day">
            <DayPage />
          </Route>
          <Route exact path="/week">
            <WeekPage />
          </Route>
          <Route exact path="/add_point">
            <AddPointPage />
          </Route>
          <Redirect to="/day" />
        </Switch>
      </HashRouter>
    </Container>
  );
}
