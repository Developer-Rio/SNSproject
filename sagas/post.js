import {all,fork, takeLatest ,call, put, delay} from 'redux-saga/effects';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../reducers/post';

function addPostAPI(){
    return axios.post('/api/addpost');
}

function* addPost(action){
    try{
        // const result = yield call(addPostAPI);
        yield delay(1000)
        // console.log('addPost Saga')
        yield put({
            type : ADD_POST_SUCCESS,
            data : action.data
        })
    }catch(err){
        yield put({
            type : ADD_POST_FAILURE,
            data : err.response.data
        })
    }

}

function addCommentAPI(){
    return axios.post('/api/addComment');
}

function* addComment(){
    try{
        // const result = yield call(addCommentAPI);
        yield delay(1000)

        yield put({
            type : ADD_COMMENT_SUCCESS,
            data : result.data
        })
    }catch(err){
        yield put({
            type : ADD_COMMENT_FAILURE,
            data : err.response.data
        })
    }

}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost)
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),

    ])
}

