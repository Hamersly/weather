import axios from "axios";

export async function getData(lat, lng) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.openweathermap.org";
  const url = `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&lang=ru&appid=${API_KEY}`;

  const {current, daily} = await axios(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  const {temp, weather, wind_speed, humidity, pressure} = current

  const today = {
    temp: temp,
    condition: weather[0].description,
    wind: wind_speed,
    humidity: humidity,
    pressure: pressure,
  };

  return {
    today,
    daily,
  };
}
