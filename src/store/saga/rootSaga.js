import { all } from "redux-saga/effects";
import setPointSaga from "./setPointSaga";

export default function* rootSaga() {
  yield all([setPointSaga()]);
}
