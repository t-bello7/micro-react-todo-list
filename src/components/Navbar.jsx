import React from "react";
import  { NavLink } from "react-router-dom"; 

class Navbar extends React.Component {
    render() {
        const links = [
            {
                id: 1,
                path: "/",
                text: "Home"
            },
            {
                id: 2,
                path: "/about",
                text: "About"
            },
            {
                id: 3,
                path: "/handle-form",
                text: "Learn Form"
            }
        ]
        return (
            <>
            <nav>
                <ul>
                    {links.map(link => <li key={link.id}><NavLink to={link.path} >{link.text}</NavLink> </li>)}
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar;