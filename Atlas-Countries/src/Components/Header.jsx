import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header(){
    return(
        <header className="Header">
            <h1 className="Logo">🌍 AtlasCountries</h1>
            <nav className="Nav">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Countries">Countries</Link>
            <Link to="/Contact">Contact</Link>
            </nav>
            
        </header>
    );
}

export default Header;