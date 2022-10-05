import { all } from "redux-saga/effects";
import setPointSaga from "./weatherLayer/setPointSaga";

export default function* rootSaga() {
  yield all([setPointSaga()]);
}
