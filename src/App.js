import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { DayPage } from "./pages/DayPage";
import { WeekPage } from "./pages/WeekPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/weather">
          <DayPage />
        </Route>
        <Route path="/weather/week">
          <WeekPage />
        </Route>
        <Redirect to="/weather" />
      </Switch>
    </BrowserRouter>
  );
}
