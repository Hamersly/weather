import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { DayPage } from "./pages/DayPage";
import { WeekPage } from "./pages/WeekPage";
import { useDispatch, useSelector } from "react-redux";
import { weatherParamsSelector } from "./store/weatherLayer/selectors";
import { useEffect } from "react";
import { setPointInfo } from "./store/weatherLayer/weatherSlice";

export default function App() {
  const weather = useSelector(weatherParamsSelector);
  const { pointName, locationLat, locationLng } = weather.point;
  const dispatch = useDispatch();

  const oldParams = {
    pointName: pointName,
    locationLat: locationLat,
    locationLng: locationLng,
  };

  useEffect(() => {
    if (!!oldParams.pointName) dispatch(setPointInfo(oldParams));
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  });

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/day">
          <DayPage />
        </Route>
        <Route exact path="/week">
          <WeekPage />
        </Route>
        <Redirect to="/day" />
      </Switch>
    </HashRouter>
  );
}
