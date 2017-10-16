export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const REQUEST_LIKED_API_DATA = 'REQUEST_LIKED_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const LIKE_POST = 'LIKE_POST';
export const DISLIKE_POST = 'DISLIKE_POST';


export function requestApiData() {
    return {
        type: REQUEST_API_DATA
    }
}

export function requestLikedApiData() {
    return {
        type: REQUEST_LIKED_API_DATA
    }
}

export function receiveApiData(data) {
    return {
        type: RECEIVE_API_DATA,
        data
    }
}

export function likePost(id, likes) {
    return {
        type: LIKE_POST,
        id,
        likes
    }
}

export function dislikePost(id, likes) {
    return {
        type: DISLIKE_POST,
        id,
        likes
    }
}