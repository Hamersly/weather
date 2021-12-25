import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import weatherSlice from "./weatherSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { weather: weatherSlice },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
