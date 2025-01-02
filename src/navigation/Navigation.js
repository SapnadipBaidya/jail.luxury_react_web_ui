import React from 'react';
import { Link } from 'react-router-dom';
import { navigationConfig } from './navigationConfig';

const renderNavItems = (items) =>
  items.map((item) => (
    <li key={item.path}>
      <Link to={item.path}>{item.label}</Link>
      {item.children && <ul>{renderNavItems(item.children)}</ul>}
    </li>
  ));

const Navigation = () => (
  <nav>
    <ul>{renderNavItems(navigationConfig)}</ul>
  </nav>
);

export default Navigation;