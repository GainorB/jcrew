import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../jcrew.png';

const Header = () => (
  <Link to="/">
    <img src={logo} alt="Jcrew" style={{ margin: '10px' }} />
  </Link>
);

export default Header;
