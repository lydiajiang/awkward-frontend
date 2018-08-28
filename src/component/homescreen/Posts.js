import React from 'react';
import {connect} from "react-redux";
import Post from "./Post";
import './Posts.css';
import {getAllPostIds} from "../../reducers/PostReducer";

const Home = ({postsId}) => {
console.log("rendering posts... ", postsId);
    return (
            <div className="posts-container">
                {postsId.map(postId => <Post key={postId} postId={postId}/>)}
            </div>
    )
};

const mapStateToProps = state => ({
    postsId: getAllPostIds(state),
});

export default connect(
    mapStateToProps,
    null
)(Home)