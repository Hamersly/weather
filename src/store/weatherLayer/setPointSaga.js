import { call, put, takeLeading } from "redux-saga/effects";
import { getData } from "./api";
import { addPointInfo } from "./weatherSlice";

export default function* setPointSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorker);
}

function* infoWorker(action) {
  try {
    const { lat, lon } = action.payload;
    const data = yield call(getData, lat, lon);
    const newParams = { ...data, point: action.payload };

    yield put(addPointInfo(newParams));
  } catch (err) {
    console.log(err);
  }
}
