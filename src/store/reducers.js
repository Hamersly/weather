const getInitialState = () => {
  const localTodo = JSON.parse(localStorage.getItem("todos"));
  if (!localTodo) {
    return {
      pointName: "",
      pointCoord: "",
      data: [],
    };
  }
  return localTodo;
};

export const weatherReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case "TEST_REDUX":
      console.log("this is weatherReducer ");
      return state;

    default:
      return state;
  }
};
