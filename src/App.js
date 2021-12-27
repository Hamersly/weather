import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { DayPage } from "./pages/DayPage";
import { WeekPage } from "./pages/WeekPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/day">
          <DayPage />
        </Route>
        <Route path="/week">
          <WeekPage />
        </Route>
        <Redirect to="/day" />
      </Switch>
    </BrowserRouter>
  );
}
