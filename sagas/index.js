import {all,fork, take,call, put} from 'redux-saga/effects';
import axios from 'axios';
function logInAPI(){
    return axios.post('/api/login');
}

function* logIn(){
    const result = yield call(logInAPI,);
    yield put({
        type : 'LOG_IN_SUCCESS',
        data : result.data
    })
}
  
function* watchLogIn(){
    yield take('LOG_IN', logIn);
}
function* watchLogIn(){
    yield take('LOG_OUT')
}
function* watchLogIn(){
    yield take('ADD_POST')
}
export default function* rootSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ])
}