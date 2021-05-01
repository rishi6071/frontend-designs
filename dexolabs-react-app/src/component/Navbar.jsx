import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-5 py-lg-0 p-3">

                {/* Navbar Brand */}
                <NavLink activeClassName="" to="/" className="navbar-brand">DEXOLABS</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active_nav_link" className="nav-link" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" activeClassName="active_nav_link" className="nav-link" exact>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active_nav_link" className="nav-link" exact>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active_nav_link" className="nav-link" exact>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;