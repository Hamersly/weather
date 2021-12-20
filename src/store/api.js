import axios from "axios";

export async function getData({ lat, lng }) {
  const apiKey = "c53bf3e244553ba293bc4ff420dc8478";
  const baseUrl = "https://api.openweathermap.org";
  const url = `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=ru&appid=${apiKey}`;
  const response = await axios(url);
  return response.data;
}

export async function setDataLocalStorage(func) {
  //Подъмена данных о погоде в LocalStorage на свежие, полученные из getData()
  try {
    const data = JSON.parse(localStorage.getItem("weather"));

    const getDataApi = await func({
      lat: data.locationLat,
      lng: data.locationLng,
    });

    const arr = {
      ...data,
      temp: getDataApi.main.temp,
      weather: getDataApi.weather[0].description,
      wind: getDataApi.wind.speed,
      humidity: getDataApi.main.humidity,
      pressure: getDataApi.main.pressure,
    };
    localStorage.setItem("weather", JSON.stringify(arr));
  } catch (err) {
    console.log(err);
  }
}
