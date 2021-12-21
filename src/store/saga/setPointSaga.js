import { call, put, select, takeLeading } from "redux-saga/effects";
import { getData } from "../api";
import { weatherParamsSelector } from "../selectors";

const result = (arr1, arr2) => {
  return Object.keys(arr1).every((key) => arr1[key] === arr2[key]);
};

export default function* setPointSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorker);
}

function* infoWorker(action) {
  try {
    const lat = action.payload.locationLat;
    const lng = action.payload.locationLng;

    const data = yield call(getData, lat, lng);

    const oldArr = yield select(weatherParamsSelector);
    const newArr = { ...data, ...action.payload };
    const equal = yield call(result, oldArr, newArr);

    if (equal === false) {
      yield put({
        type: "ADD_POINT_INFO",
        payload: newArr,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
