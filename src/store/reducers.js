const initialInfoState = () => {
  const localTodo = JSON.parse(localStorage.getItem("weather"));
  if (!localTodo) {
    return {
      pointName: "",
      locationLat: "",
      locationLng: "",
    };
  }
  return localTodo;
};

// async function getData() {
//   const localTodo = JSON.parse(localStorage.getItem("weather"));
//   console.log(localTodo);
//   const key = "c53bf3e244553ba293bc4ff420dc8478";
//   const value = {
//     lat: localTodo.locationLat,
//     lon: localTodo.locationLng,
//     apiKey: key,
//   };
//   const request = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&units=metric&lang=russian&appid=${value.apiKey}`
//   );
//   const data = await request.json();
//   console.log(data);
//   return data;
// }

const initialDataState = () => {
  return {
    temp: "",
    weather: "",
    wind: "",
  };
};

export const infoReducer = (state = initialInfoState(), action) => {
  switch (action.type) {
    case "ADD_POINT_INFO":
      // console.log(action.payload);
      return {
        ...state,
        pointName: action.payload.address,
        locationLat: action.payload.lat,
        locationLng: action.payload.lng,
      };

    default:
      return state;
  }
};

export const dataReducer = (state = initialDataState(), action) => {
  switch (action.type) {
    case "ADD_POINT_DATA":
      // console.log(action.payload.weather[0].description);
      return {
        ...state,
        temp: action.payload.main.temp,
        weather: action.payload.weather[0].description,
        wind: action.payload.wind.speed,
      };
    default:
      return state;
  }
};
