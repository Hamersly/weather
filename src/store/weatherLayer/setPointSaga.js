import { call, put, select, takeLeading } from "redux-saga/effects";
import { getData } from "./api";
import { todayParamsSelector } from "./selectors";
import { addPointInfo, setPointInfo } from "./weatherSlice";
import { equals } from "ramda";

export default function* setPointSaga() {
  yield takeLeading(setPointInfo, infoWorker);
}

function* infoWorker(action) {
  try {
    const lat = action.payload.locationLat;
    const lng = action.payload.locationLng;

    const data = yield call(getData, lat, lng);

    const oldParams = yield select(todayParamsSelector);
    const newParams = { ...data, point: action.payload };
    const equal = yield call(equals, oldParams, newParams.today);

    if (equal === false) {
      yield put(addPointInfo(newParams));
    }
  } catch (err) {
    console.log(err);
  }
}
