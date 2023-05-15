import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/group-create">group create</NavLink>
        </li>
        <li>
          <NavLink to="/registration">registration</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default Header;
