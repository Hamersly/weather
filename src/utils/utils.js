export const reformatDate = (date) => {
  const item = new Date(date * 1000);
  return [item.getDate(), item.getMonth() + 1].join(".");
};

export const isSame = (obj1, obj2) => {
  return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
};
