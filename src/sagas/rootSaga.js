import { all } from "redux-saga/effects";
import { testSagaWatcher } from "./sagas";

export default function* rootSaga() {
  yield all([testSagaWatcher()]);
}
