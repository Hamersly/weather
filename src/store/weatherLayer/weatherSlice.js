import { createSlice } from "@reduxjs/toolkit";
import { handleUnite } from "../../utils/utils";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      point: {
        pointName: "Екатеринбург",
        lat: 56.8430993,
        lon: 60.64540859999999,
      },
      today: {},
      daily: [],
    };
  }
  return localParams;
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addPointInfo(state, action) {
      state = handleUnite(state, action.payload);
    },
  },
});

export const { setPointInfo, addPointInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
