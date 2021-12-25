import axios from "axios";

export async function getData(lat, lng) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.openweathermap.org";
  const url = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=ru&appid=${API_KEY}`;

  const { main, weather, wind } = await axios(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    temp: main.temp,
    condition: weather[0].description,
    icon: weather[0].icon,
    wind: wind.speed,
    humidity: main.humidity,
    pressure: main.pressure,
  };
}
