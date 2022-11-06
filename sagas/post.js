import {all,fork, takeLatest ,call, put, delay} from 'redux-saga/effects';

function addPostAPI(){
    return axios.post('/api/addpost');
}

function* addpost(){
    try{
        // const result = yield call(addPostAPI);
        yield delay(1000)

        yield put({
            type : 'ADD_POST_SUCCESS',
            data : result.data
        })
    }catch(err){
        yield put({
            type : 'ADD_POST_FAILURE',
            data : err.response.data
        })
    }

}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST',addpost)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),

    ])
}

