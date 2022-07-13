import React from "react";
import  { NavLink, Outlet, useParams} from "react-router-dom"; 

const About = () => {

    return (
    <div className="about__content">
        <h3> About </h3>
        <ul className="about__list">
            <NavLink to='about-app'> about todo</NavLink>
            <NavLink to='about-author'> about Author</NavLink>
        </ul>
        <Outlet />
    </div>)
}

export default About;