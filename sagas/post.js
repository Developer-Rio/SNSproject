import {all,fork, takeLatest ,call, put, delay} from 'redux-saga/effects';
import shortId from 'shortid';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS } from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';
function addPostAPI(){
    return axios.post('/api/addpost');
}

function* addPost(action){
    try{
        // const result = yield call(addPostAPI);
        yield delay(1000)
        // console.log('addPost Saga')
        const id = shortId.generate()
        yield put({
            type : ADD_POST_SUCCESS,
            data :{
                id, 
                content : action.data
            }
        })
        yield put({
            type : ADD_POST_TO_ME,
            data : id,
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

function* addComment(action){
    try{
        // const result = yield call(addCommentAPI);
        yield delay(1000)
        // console.log(action);
        yield put({
            type : ADD_COMMENT_SUCCESS,
            data : action.data
        })
    }catch(err){
        yield put({
            type : ADD_COMMENT_FAILURE,
            data : err.response.data
        })
    }

}


function removePostAPI(){
    return axios.delete('/api/removePost');
}

function* removePost(action){
    try{
        // const result = yield call(removePostAPI);
        yield delay(1000)
        yield put({
            type : REMOVE_POST_SUCCESS,
            data : action.data
        })
        yield put({
            type : REMOVE_POST_OF_ME,
            data : action.data,
        })
    }catch(err){
        yield put({
            type : REMOVE_POST_FAILURE,
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
function* watchRemoveComment(){
    yield takeLatest(REMOVE_POST_REQUEST,removePost)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemoveComment),

    ])
}

