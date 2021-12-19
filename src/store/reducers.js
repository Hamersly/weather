const initialState = () => {
  const localTodo = JSON.parse(localStorage.getItem("weather"));
  if (!localTodo) {
    return {
      pointName: "",
      locationLat: "",
      locationLng: "",
      temp: "",
      weather: "",
      wind: "",
    };
  }
  return localTodo;
};

export const weatherReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "ADD_POINT_INFO":
      return {
        ...state,
        pointName: action.payload.address,
        locationLat: action.payload.lat,
        locationLng: action.payload.lng,
      };
    case "ADD_POINT_DATA":
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
