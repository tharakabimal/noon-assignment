import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData, likePost } from '../actions/actionCreators';
import Post from './Post';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

class Home extends Component {
    
    componentDidMount(){
        this.props.requestApiData();
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    {this.props.posts.map((post, index) => 
                        <Col sm={6} md={6}>
                            <Post {...this.props} key={index} post={post} index={index}/>
                        </Col>   
                    )}
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.api
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestApiData, likePost } , dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(Home);
