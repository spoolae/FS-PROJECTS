import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headerTabs = [
    { link: '/', label: 'Home' },
    { link: '/users', label: 'Users' },
    { link: '/registration', label: 'New user' },
    { link: '/group-create', label: 'Group create' },
  ];

  return (
    <nav className="header">
      <ul>
        {headerTabs.map((tab) => (
          <li key={tab.link}>
            <NavLink to={tab.link}>{tab.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
