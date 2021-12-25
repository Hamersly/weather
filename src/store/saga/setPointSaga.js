import { call, put, select, takeLeading } from "redux-saga/effects";
import { getData } from "../api";
import { weatherParamsSelector } from "../selectors";
import { addPointInfo, setPointInfo } from "../weatherSlice";

const isSame = (obj1, obj2) => {
  return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
};

export default function* setPointSaga() {
  yield takeLeading(setPointInfo, infoWorker);
}

function* infoWorker(action) {
  try {
    const lat = action.payload.locationLat;
    const lng = action.payload.locationLng;

    const data = yield call(getData, lat, lng);

    const oldParams = yield select(weatherParamsSelector);
    const newParams = { ...data, ...action.payload };
    const equal = yield call(isSame, oldParams, newParams);

    if (equal === false) {
      yield put(addPointInfo(newParams));
    }
  } catch (err) {
    console.log(err);
  }
}
