import React from "react";

const style= {
    navBarStyle: {
        background: "purple",
        // justtifyContent: "flex-end"
    }
};

const Navbar = props =>
    <nav style={style.navBarStyle} className="navbar">
        <ul>
            <li  className="brand"><a href="/">{props.title}</a></li>
            <li id="scored">{props.scored}</li>
            <li id="current-score">{props.curScore}</li>
            <li id="top-score">{props.topScore}</li>
        </ul>
    </nav>


export default Navbar;