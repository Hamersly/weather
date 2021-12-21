import { call, put, select, takeLeading } from "redux-saga/effects";
import { getData } from "../store/api";
import { weatherParamsSelector } from "../store/selectors";

export function* setPointSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorker);
}

function* infoWorker(action) {
  try {
    const weather = yield select(weatherParamsSelector);
    const coordinates = {
      lat: action.payload.locationLat,
      lng: action.payload.locationLng,
    };

    const data = yield call(getData, coordinates);

    const newArr = { ...data, ...action.payload };

    if (
      newArr.pointName !== weather.pointName ||
      newArr.weather !== weather.weather ||
      newArr.wind !== weather.wind ||
      newArr.humidity !== weather.humidity ||
      newArr.pressure !== weather.pressure ||
      newArr.temp !== weather.temp
    ) {
      yield put({
        type: "ADD_POINT_INFO",
        payload: { ...action.payload, ...data },
      });
    }
  } catch (err) {
    console.log(err);
  }
}
