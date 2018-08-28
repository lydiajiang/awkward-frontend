import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addPost} from "../../action/posts";
import {withRouter} from "react-router";
import NavImg from "../common/NavImg";
import logo from "../../assets/logo.svg"
import './CreatePost.css';

const CreatePost = ({addPost, history}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        addPost(e.target.body.value);
        history.push("/")
    };
    const onBack = (e) => {
        e.preventDefault();
        history.push("/")
    }
    return (
        <Fragment>
            <div className="header">
                <NavImg className="header_logo" icon={logo} route="/" align="right" alt="Home"/>
            </div>
            <form onSubmit={onSubmit} className="form-container">
                <h1 className="sub-heading">Share an Awkward Moment</h1>
                <div>
                    <input className="inputPost" type="text" name="body" placeholder="Write about something awkward"/>
                </div>
            </form>
            <div className="actionButton_container">
                <input className="actionButton_submit" type="submit" value="Submit"/>
                <button className="actionButton_back" onClick={onBack}>Back</button>
            </div>
        </Fragment>
    );
}
const mapDispatchToProps = dispatch => bindActionCreators({
    addPost: addPost,
}, dispatch)


export default withRouter(connect(
    null,
    mapDispatchToProps
)(CreatePost))