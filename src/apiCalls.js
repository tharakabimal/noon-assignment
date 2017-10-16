import 'whatwg-fetch';

export function fetchData () {
    try{
        return fetch('http://localhost:8080/api/posts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
            return json.post;
		})
    }catch(e){
        console.log(e);
    }
}

export function fetchLikedPosts () {
    try{
        return fetch('http://localhost:8080/api/liked-posts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
            return json.post;
		})
    }catch(e){
        console.log(e);
    }
}

export function likePostDb (id, likes) {
    try{
        return fetch('http://localhost:8080/api/posts/like', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: id,
				likes
			})
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
            return json.post;
		})
    }catch(e){
        console.log(e);
    }
}

export function dislikePostDb (id, likes) {
    try{
        return fetch('http://localhost:8080/api/posts/dislike', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: id,
				likes
			})
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
            return json.post;
		})
    }catch(e){
        console.log(e);
    }
}
