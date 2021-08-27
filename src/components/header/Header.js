import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './header.scss';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <header>
      <nav>
        <Link className="logo" to="/">BOOKSTORE CMS</Link>
        <ul>
          <li><Link className={splitLocation[1] === '' ? 'active' : ''} to="/">BOOKS</Link></li>
          <li><Link className={splitLocation[1] === 'categories' ? 'active' : ''} to="/categories">CATEGORIES</Link></li>
        </ul>
        <Link to="/profile" className="profile"><FaUserAlt /></Link>
      </nav>
    </header>
  );
};

export default Header;
