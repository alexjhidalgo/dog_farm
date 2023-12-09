import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          {/* Consumer users go here */}
            <a href="/dogs">Dogs/Puppies</a> 
          </li>
          <li>
            {/* Business users go here */}
            <a href="/breeders">Breeders</a>
          </li>
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
