import { createSlice } from "@reduxjs/toolkit";
import { handleUnite } from "../../utils/utils";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      point: { pointName: "Москва", lat: 55.755826, lon: 37.6173 },
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
