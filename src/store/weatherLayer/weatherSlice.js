import { createSlice } from "@reduxjs/toolkit";
import { uniteHandle } from "../../utils/utils";

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
    addPointInfo(state, action) {
      state = uniteHandle(state, action.payload);
    },
  },
});

export const { setPointInfo, addPointInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
