import { call, put, takeLeading } from "redux-saga/effects";
import { getData } from "../store/api";

export function* setPointSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorker);
}

function* infoWorker(action) {
  const coordinates = {
    lat: action.payload.lat,
    lng: action.payload.lng,
  };

  try {
    const data = yield call(getData, coordinates);
    yield put({
      type: "ADD_POINT_INFO",
      payload: { ...action.payload, ...data },
    });
  } catch (error) {
    console.log(error);
  }
}
