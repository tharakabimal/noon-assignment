import React from 'react';
import {
    Thumbnail,
    Button,
    Image
} from 'react-bootstrap';

const LikedPost = ({ dislikePost, post, index }) => (

    <Thumbnail>
        {post.user}
        <Image src={post.img_url} responsive />
        <i className="fa fa-heart LikeButton__icon LikeButton__icon--liked"/> {post.likes} likes
        <p>{post.caption}</p>
        <p>
            <button className="likes" onClick={() => dislikePost(post._id, post.likes)}>Dislike</button>
        </p>
    </Thumbnail>
)

export default LikedPost;