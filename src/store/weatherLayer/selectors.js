import { createSelector } from "@reduxjs/toolkit";

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

const reformatDate = (date) => {
  const item = new Date(date * 1000);
  return [item.getDate(), item.getMonth() + 1].join(".");
};

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
