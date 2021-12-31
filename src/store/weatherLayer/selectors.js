import { createSelector } from "@reduxjs/toolkit";
import { reformatDate } from "../../utils/utils";

const weatherParams = (state) => state;

export const weatherParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather
);

export const todayParamsSelector = createSelector(weatherParams, (state) => {
  const { temp, wind, pressure } = state.weather.today;
  return {
    ...state.weather.today,
    temp: Math.round(temp),
    wind: Math.round(wind, -1),
    pressure: Math.round(pressure / 1.33322),
  };
});

export const pointParamsSelector = createSelector(
  weatherParams,
  (state) => state.weather.point
);

export const dailyParamsSelector = createSelector(weatherParams, (state) =>
  state.weather.daily.map((item) => {
    return {
      ...item,
      dt: reformatDate(item.dt),
      temp: {
        day: Math.round(item.temp.day),
        night: Math.round(item.temp.night),
      },
    };
  })
);
