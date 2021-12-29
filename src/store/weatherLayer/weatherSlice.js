import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      point: {},
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
    setPointInfo(state) {},

    addPointInfo(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setPointInfo, addPointInfo } = weatherSlice.actions;
export default weatherSlice.reducer;