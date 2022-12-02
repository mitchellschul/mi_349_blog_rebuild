import React from 'react';
import './style.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav_title">Mitchell Schuldinger</div>
            <ul className="nav_list">
                <li className="nav_item"><a href="./" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="./" className="nav_link">About</a></li>
                <li className="nav_item"><a href="./" className="nav_link">Contact</a></li>
            </ul>
        </nav>

    )
}

export default Nav