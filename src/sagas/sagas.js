import { call, put, takeLeading } from "redux-saga/effects";

const key = "c53bf3e244553ba293bc4ff420dc8478";

async function getData(value) {
  const request = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lng}&units=metric&lang=ru&appid=${value.apiKey}`
  );
  const data = await request.json();
  return data;
}

export function* setPointInfoSaga() {
  yield takeLeading("SET_POINT_INFO", infoWorkerSaga);
}

function* infoWorkerSaga(action) {
  yield put({ type: "ADD_POINT_INFO", payload: action.payload });
  const value = {
    lat: action.payload.lat,
    lng: action.payload.lng,
    apiKey: key,
  };

  const data = yield call(getData, value);

  console.log(data);
  yield put({ type: "ADD_POINT_DATA", payload: data });
}

// export function* setPointDataSaga() {
//   yield takeLeading("SET_DATA_INFO", dataWorkerSaga);
// }
//
// function* dataWorkerSaga(action) {
//   const value = {
//     lat: action.payload.lat,
//     lng: action.payload.lng,
//     apiKey: key,
//   };
//
//   const data = yield call(getData, value);
//   yield put({ type: "ADD_POINT_DATA", payload: data });
// }
