import { createSelector } from "@reduxjs/toolkit";

const weatherParams = (state) => state;

export const weatherParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather
);

export const todayParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather.today
);

export const pointParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather.point
);

export const dailyParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather.daily
);
