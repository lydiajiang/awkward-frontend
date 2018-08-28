import React from 'react'
import {toggleFavorite} from "../../action/posts";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import grayPhoto from "../../assets/grayHeart.svg";
import redPhoto from "../../assets/redHeart.svg";
import './Post.css';
import {getPostById} from "../../reducers/PostReducer";

const Post = ({body, toggleFavorite, postId, favorite, favoriteCount}) => {
    console.log("rendering postId: ", postId)
    const onFavoriteClick = () => {
        toggleFavorite(postId, !favorite)
    };
    return (
        <div className="post-container">
            <p>{body}</p>
            <div className="icon-container">
                <img src={favorite ? redPhoto : grayPhoto} onClick={onFavoriteClick} className="heart-img" alt="like"/>
                <p className="favorite-count">{favoriteCount}</p>
            </div>
        </div>
    )
};
const mapStateToProps = (state, { postId }) => {
    const post = getPostById(state,postId);
    const { body, toggleFavorite, favorite, favoriteCount} = post;
    return {
        body, toggleFavorite, postId, favorite, favoriteCount
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavorite: toggleFavorite,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)