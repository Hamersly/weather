import { call, put, takeLeading } from "redux-saga/effects";
import { getData } from "./api";
import { addPointInfo, setPointInfo } from "./weatherSlice";

export default function* setPointSaga() {
  yield takeLeading(setPointInfo, infoWorker);
}

function* infoWorker(action) {
  try {
    const lat = action.payload.locationLat;
    const lng = action.payload.locationLng;

    const data = yield call(getData, lat, lng);

    const newParams = { ...data, point: action.payload };

    yield put(addPointInfo(newParams));
  } catch (err) {
    console.log(err);
  }
}
