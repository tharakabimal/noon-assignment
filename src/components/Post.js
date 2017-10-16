import React from 'react';
import './Post.css'
import {
    Thumbnail,
    Button,
    Image
} from 'react-bootstrap';

const Post = ({ likePost, post, index, data }) => (
    <Thumbnail>
        {post.user}
        <Image src={post.img_url} responsive />
        <i className="fa fa-heart LikeButton__icon LikeButton__icon--liked"/> {post.likes} likes
        <p>{post.caption}</p>
        <p>
            { post.liked ? 
                <i className="fa fa-heart LikeButton__icon LikeButton__icon--liked"/>
            : 
                <button 
                    className="LikeButton__root" 
                    onClick={() => likePost(post._id, post.likes)}>
                        <i className="fa fa-heart-o LikeButton__icon"/>
                </button> 
            }
        </p>
    </Thumbnail>
);

export default Post;