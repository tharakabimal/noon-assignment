import { RECEIVE_API_DATA } from '../actions/actionCreators';

function api(state = [], action) {
    const { type, data } = action;
    switch (type) {
        case RECEIVE_API_DATA:
            return data
        default:
            return state;
    }
}
    
export default api;