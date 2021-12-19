import { all } from "redux-saga/effects";
import { setPointDataSaga, setPointInfoSaga } from "./sagas";

export default function* rootSaga() {
  yield all([setPointInfoSaga(), setPointDataSaga()]);
}
