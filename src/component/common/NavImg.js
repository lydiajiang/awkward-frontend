import {withRouter} from "react-router";
import React from "react";
const NavImg = ({icon, className, route, history, alt}) =>{
    const routeTo = () => {
        history.push(route)
    };
    return (
        <img className={className} src={icon} alt={alt} onClick={routeTo} align="right"/>
    )
};
export default withRouter((NavImg))