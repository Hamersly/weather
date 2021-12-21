const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      pointName: "",
      locationLat: "",
      locationLng: "",
      temp: "",
      weather: "",
      wind: "",
      humidity: "",
      pressure: "",
    };
  }
  return localParams;
};

export const weatherReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "ADD_POINT_INFO":
      return {
        ...state,
        pointName: action.payload.pointName,
        locationLat: action.payload.locationLat,
        locationLng: action.payload.locationLng,
        temp: action.payload.temp,
        weather: action.payload.weather,
        wind: action.payload.wind,
        humidity: action.payload.humidity,
        pressure: action.payload.pressure,
      };

    default:
      return state;
  }
};
