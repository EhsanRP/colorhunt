import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">

                <div className="brand">
                    <i className="bi bi-terminal-fill"></i>
                    <span>Color Hunt</span>
                </div>

                <div className="search">
                    <label htmlFor="search"><i className="bi bi-search"></i></label>
                    <input name="search" type="text" placeholder="search"/>
                </div>

                <div className="extension">
                    <i className="bi bi-app-indicator"></i>
                    <span>Add to Chrome</span>
                </div>

                <div className="miniMenu">
                    <i className="bi bi-three-dots"></i>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;