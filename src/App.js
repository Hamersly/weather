import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { DayPage } from "./pages/DayPage/DayPage";
import { WeekPage } from "./pages/WeekPage/WeekPage";
import { useDispatch, useSelector } from "react-redux";
import { weatherParamsSelector } from "./store/weatherLayer/selectors";
import { useEffect } from "react";
import { setPointInfo } from "./store/weatherLayer/actions";
import Snow from "./static/snow.jpeg";
import Clouds from "./static/clouds.jpg";
import Clear from "./static/clear.jpg";
import Atmosphere from "./static/atmosphere.jpg";
import Rain from "./static/rain.jpg";
import Drizzle from "./static/drizzle.jpg";
import Thunderstorm from "./static/thunderstorm.jpg";

export default function App() {
  const weather = useSelector(weatherParamsSelector);
  const dispatch = useDispatch();

  const { pointName, lat, lon } = weather.point;

  const oldParams = {
    pointName,
    lat,
    lon,
  };

  useEffect(() => {
    dispatch(setPointInfo(oldParams));
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  });

  const fon = () => {
    switch (weather.today.main) {
      case "Snow":
        return (document.body.style.backgroundImage = `url(${Snow})`);
      case "Clouds":
        return (document.body.style.backgroundImage = `url(${Clouds})`);
      case "Clear":
        return (document.body.style.backgroundImage = `url(${Clear})`);
      case "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Dust" ||
        "Fog" ||
        "Sand" ||
        "Ash" ||
        "Squall" ||
        "Tornado":
        return (document.body.style.backgroundImage = `url(${Atmosphere})`);
      case "Rain":
        return (document.body.style.backgroundImage = `url(${Rain})`);
      case "Drizzle":
        return (document.body.style.backgroundImage = `url(${Drizzle})`);
      case "Thunderstorm":
        return (document.body.style.backgroundImage = `url(${Thunderstorm})`);
      default:
        break;
    }
  };

  useEffect(() => fon());

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
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
          <Redirect to="/day" />
        </Switch>
      </HashRouter>
    </div>
  );
}
