import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestLikedApiData, dislikePost } from '../actions/actionCreators';
import LikedPost from './LikedPost';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

class Liked extends Component {

    componentDidMount(){
        this.props.requestLikedApiData();
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                {this.props.posts.map((post, index) => 

                    post.liked ?  
                        <Col sm={6} md={6}>
                            <LikedPost {...this.props} key={index} post={post} index={index}/> 
                        </Col>   
                    : 
                        null
                )}
            </Row>
            </Grid>
        )
    }
}


const mapStateToProps = (state) => ({
    posts: state.api
});

const mapDispatchToProps = (dispatch) =>  bindActionCreators( { requestLikedApiData, dislikePost }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Liked);