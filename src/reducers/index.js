import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import api from './api';

const rootReducer = combineReducers({
    api,
    routing: routerReducer 
});

export default rootReducer;