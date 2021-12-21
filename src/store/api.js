import axios from "axios";

export async function getData(lat, lng) {
  const apiKey = "c53bf3e244553ba293bc4ff420dc8478";
  const baseUrl = "https://api.openweathermap.org";
  const url = `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=ru&appid=${apiKey}`;

  const { main, weather, wind } = await axios(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return {
    temp: main.temp,
    weather: weather[0].description,
    wind: wind.speed,
    humidity: main.humidity,
    pressure: main.pressure,
  };
}
