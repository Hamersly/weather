export const reformatDate = (date) => {
  const item = new Date(date * 1000);
  return [item.getDate(), item.getMonth() + 1].join(".");
};
