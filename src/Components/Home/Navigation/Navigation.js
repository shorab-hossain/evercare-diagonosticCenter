import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nabar-item" style={{backgroundColor:'#0f0826'}}>
         <nav className="navbar navbar-expand-lg navbar-light  text-light container main-item">
            <Link className="navbar-brand text-light" to="#" style={{fontWeight:'bold'}}>Feni Evercare Diagonostic center</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto left-navbar">
                <li className="nav-item active">
                    <Link className="nav-link content" to="home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/about">About</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/services">Services</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link content" to="/blog">Blog</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle content m-0" to="/contract" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Contract
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Contract 1</Link>
                    <Link className="dropdown-item" to="#">Contract 2</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Quick Contract</Link>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
     </div>
    );
};

export default Navigation;