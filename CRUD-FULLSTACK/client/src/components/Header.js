import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headerTabs = [
    { link: '/', label: 'Home' },
    { link: '/users', label: 'Users' },
    { link: '/group-create', label: 'Group create' },
    { link: '/registration', label: 'Registration' },
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
