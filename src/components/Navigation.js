import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/aboutme" activeClassName="active">About Me</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact Me</NavLink>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </nav>
    );
};

export default Navigation;
