export default async function getData(value) {
  const apiKey = "c53bf3e244553ba293bc4ff420dc8478";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lng}&units=metric&lang=ru&appid=${apiKey}`;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
}
