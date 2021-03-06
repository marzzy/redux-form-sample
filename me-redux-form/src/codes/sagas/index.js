// import { put, takeLatest } from 'redux-saga/effects';
import { put, takeLatest, all } from 'redux-saga/effects';
import { resiveUser } from '../actions'


function* fetchPost(userName) {

  const json = yield fetch(`https://api.github.com/users/${userName}`)
      .then(
        response => response.json(),
        // err => console.log(`an err accourd : ${err}`)
      )

  yield put(resiveUser(userName, json));
}

function* actionWatcher() {
  yield takeLatest('REQUEST_USER', fetchPost);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

// export function fetchPost(userName) {
//   return function (dispatch) {
//     dispatch(requestUser(userName));

//     return fetch(`https://api.github.com/users/${userName}`)
//       .then(
//         res => res.json(),
//         err => console.log(`an err accourd : ${err}`)
//       ).then(
//         json => dispatch(resiveUser(userName, json))
//       )
//   }
// }