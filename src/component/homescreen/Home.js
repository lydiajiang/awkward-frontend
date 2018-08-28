import React, {Fragment} from 'react';
import logo from "../../assets/logo.svg"
import post from "../../assets/post.svg"
import NavImg from "../common/NavImg";
import Posts from "./Posts";
import './Home.css';

const Home = () => {
    return (
       <Fragment>
            <div className="header">
                <NavImg className="header_logo" icon={logo} route="/" align="right" alt="Home"/>
                <NavImg className="createPost_img" icon={post} route="/post" align="right" alt="Create Post"/>
            </div>
            <Posts/>
       </Fragment>
    )
};

export default (Home)