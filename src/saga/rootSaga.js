import { all } from "redux-saga/effects";
import { setParamsSaga, setPointSaga } from "./sagas";

export default function* rootSaga() {
  yield all([setPointSaga()]);
}
