import { takeEvery } from "redux-saga/effects";

export function* testSagaWatcher() {
  yield takeEvery("TEST_SAGA", testSagaWorker);
}

function* testSagaWorker() {
  console.log("run is helloSagaWorker");
}
