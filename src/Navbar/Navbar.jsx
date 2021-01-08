import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/">Sfytech</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink exact to="/"
                                            activeClassName="menu_active"
                                            className="nav-link active"

                                        >Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>


                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
