import React from 'react'

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = props =>{
    return(
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places' exact>My Place</NavLink>
            </li>
            <li>
                <NavLink to='/places/new' exact>Add Place</NavLink>
            </li>
            <li>
                <NavLink to='/auth' exact>Authendicate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;