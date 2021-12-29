import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import weatherSlice from "./weatherLayer/weatherSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { weather: weatherSlice },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
