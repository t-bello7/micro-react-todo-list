import React from "react";
import  { NavLink, Outlet, useParams} from "react-router-dom"; 

const About = () => {
    let params = useParams();
    return (
    <div>
        <h3>About </h3>
        <NavLink to='about-app'> about todo</NavLink>
        <NavLink to='about-author'> about Author</NavLink>
        <NavLink to={`about/${params.aboutID}`}></NavLink>
        <Outlet />
    </div>)
}

export default About;