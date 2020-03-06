import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places" exact>
            My Place
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new" exact>
            Add Place
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth" exact>
            Authendicate
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
