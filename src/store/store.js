import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(
//   rootReducer,
//   compose(
//     window.devToolsExtension ? window.devToolsExtension() : (f) => f,
//     applyMiddleware(sagaMiddleware)
//   )
// );
//
// sagaMiddleware.run(rootSaga);
export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
