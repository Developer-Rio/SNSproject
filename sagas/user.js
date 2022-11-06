import {all,fork, takeLatest ,call, put, delay} from 'redux-saga/effects';
import { LOG_IN_REQUEST } from '../reducers/user';
function logInAPI(data){
    return axios.post('/api/login');
}
import {LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS} from '../reducers/user';

function* logIn(action){
    try{
        // const result = yield call(logInAPI,action.data);
        yield delay(1000)
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : action.data
        })
    }catch(err){
        yield put({
            type : 'LOG_IN_FAILURE',
            data : err.response.data
        })
    }

}

function logOutAPI(){
    return axios.post('/api/logout');
}

function* logOut(){
    try{
        // const result = yield call(logOutAPI);
        yield delay(1000)
        yield put({
            type : LOG_OUT_SUCCESS,
        })
    }catch(err){
        yield put({
            type : LOG_OUT_FAILURE,
            data : err.response.data
        })
    }

}
function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}