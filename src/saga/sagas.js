import { call, fork, put, takeLeading } from "redux-saga/effects";
import getData from "../store/api";

export function* setPointInfoSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorker);
}

function* infoWorker(action) {
  yield put({ type: "ADD_POINT_INFO", payload: action.payload });
  yield call(dataWorker, action);
}

export function* setPointDataSaga() {
  yield takeLeading("SET_DATA_INFO", dataWorker);
}

function* dataWorker(action) {
  const coordinates = {
    lat: action.payload.lat,
    lng: action.payload.lng,
  };
  try {
    const data = yield call(getData, coordinates);
    yield put({ type: "ADD_POINT_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
}
