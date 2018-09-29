import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import allReducers from '../reducers';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield [
    takeLatest("HEADER_CALL", workerSaga),
    takeLatest("HOME_CALL", homeApi),
    takeLatest("LOGIN_ACTION", loginApi)
  ]
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "http://goancourtyard.com/api/allmaindata/:id?customerid=25"
  });
}

function fetchHome() {
  return axios({
    method: "get",
    url: "http://goancourtyard.com/api/allhomedata/:id?customerid=25"
  });
}

// function fetchUser(data) {
//   debugger;
//   return ;
//  }

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", data: response.data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", message: error.message });
  }
}

function* homeApi() {
  try {
    const response = yield call(fetchHome);
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_HOME_CALL_SUCCESS", data: response.data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_HOME_CALL_FAILURE", message: error.message });
  }
}

function* loginApi(data) {
  try {
    debugger;
    const response = yield call(axios({
            method: "post",
            url: "http://goancourtyard.com/api/loginuser/:id?customerid=25",
            data: JSON.stringify({dataobj:data.payload}),
            dataType: 'json',
            crossDomain: true,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers': '*'
            }
        })
    );
    alert(response.data);
  } catch (error) {
    alert(error.message);
    // dispatch a failure action to the store with the error
    yield put({ type: "LOGIN_FAILURE", message: error.message });
  }
}


export default watcherSaga;