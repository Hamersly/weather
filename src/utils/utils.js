export const reformatDate = (value) => {
  const date = new Date(value * 1000);

  const options = {
    month: "2-digit",
    day: "2-digit",
  };
  return date.toLocaleString("ru-RU", options);
};

export const nowDate = () => {
  const now = new Date().getTime();
  const date = new Date(now);

  const options = {
    month: "long",
    day: "2-digit",
  };

  return date.toLocaleString("ru-RU", options);
};

export const handleUnite = (state, payload) => Object.assign(state, payload);

export const selectedFon = (status) => {
  switch (status) {
    case "Snow":
      return "url(/weather/img/Snow.jpg";
    case "Clouds":
      return "url(/weather/img/Clouds.jpg";
    case "Clear":
      return "url(/weather/img/Clear.jpg";
    case "Rain":
      return "url(/weather/img/Rain.jpg";
    case "Drizzle":
      return "url(/weather/img/Drizzle.jpg";
    case "Thunderstorm":
      return "url(/weather/img/Thunderstorm.jpg";
    default:
      return "url(/weather/img/Atmosphere.jpg";
  }
};
