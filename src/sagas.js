import { call, put, takeEvery, takeLatest, all, fork } from 'redux-saga/effects'
import { 
  fetchData, 
  likePostDb, 
  fetchLikedPosts ,
  dislikePostDb
} from './apiCalls';

import { 
  REQUEST_API_DATA, 
  REQUEST_LIKED_API_DATA, 
  LIKE_POST,
  DISLIKE_POST,
  receiveApiData 
} from './actions/actionCreators';

function* getApiData() {
   try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
   } catch (e) {
        console.log(e)
   }
}

function* getLikedApiData() {
  try {
       const data = yield call(fetchLikedPosts);
       yield put(receiveApiData(data));
  } catch (e) {
       console.log(e)
  }
}

function* likePost(action) {
  try {
       const LikedPostId = yield call(likePostDb, action.id, action.likes);
       const data = yield call(fetchData);
       yield put(receiveApiData(data));
  } catch (e) {
       console.log(e)
  }
}

function* dislikePost(action) {
  try {
       const LikedPostId = yield call(dislikePostDb, action.id, action.likes);
       const data = yield call(fetchData);
       yield put(receiveApiData(data));
  } catch (e) {
       console.log(e)
  }
}




function* fetchDataSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* fetchLikedDataSaga() {
  yield takeLatest(REQUEST_LIKED_API_DATA, getLikedApiData);
}

function* likePostSaga() {
    yield takeLatest(LIKE_POST, likePost);
}

function* dislikePostSaga() {
  yield takeLatest(DISLIKE_POST, dislikePost);
}


export default function* rootSaga() {
  yield all([
    fork(fetchDataSaga),
    fork(fetchLikedDataSaga),
    fork(likePostSaga),
    fork(dislikePostSaga),
  ])
}