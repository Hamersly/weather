import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { DayPage } from "./pages/DayPage";
import { WeekPage } from "./pages/WeekPage";

export default function App() {
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
