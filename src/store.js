import { createStore, applyMiddleware} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas';

import posts from './data/posts';

const sagaMiddleware = createSagaMiddleware();

// const defaultState = {
//     posts
// }

export const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

export default store;

sagaMiddleware.run(rootSaga);