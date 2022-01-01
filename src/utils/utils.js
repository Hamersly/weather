export const reformatDate = (value) => {
  const date = new Date(value * 1000);
  const options = {
    month: "2-digit",
    day: "2-digit",
  };
  return date.toLocaleString("ru-RU", options);
};

export const uniteHandle = (state, payload) => Object.assign(state, payload);
