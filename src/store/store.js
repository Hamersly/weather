import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
