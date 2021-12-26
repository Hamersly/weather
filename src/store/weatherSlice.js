import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      point: {
        pointName: "",
        locationLat: "",
        locationLng: "",
      },
      today: {
        temp: "",
        condition: "",
        wind: "",
        humidity: "",
        pressure: "",
      },
      daily: {},
    };
  }
  return localParams;
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setPointInfo(state, action) {
      return state;
    },
    addPointInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setPointInfo, addPointInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
