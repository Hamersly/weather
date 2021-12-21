import { createSelector } from "@reduxjs/toolkit";

const weatherParams = (state) => state;
export const weatherParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather
);
