import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Welcome to Willy Wonka's Club!</h1>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
  </div>
);

export default Header;
