import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { DayPage } from "./pages/DayPage";
import { WeekPage } from "./pages/WeekPage";
import { useSelector } from "react-redux";
import { weatherParamsSelector } from "./store/weatherLayer/selectors";
import { useEffect } from "react";

export default function App() {
  const weather = useSelector(weatherParamsSelector);

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
