import { all } from "redux-saga/effects";
import { setPointSaga } from "./sagas";

export default function* rootSaga() {
  yield all([setPointSaga()]);
}
