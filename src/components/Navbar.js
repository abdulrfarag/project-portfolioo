import React from 'react';
import '../styles/Navbar.css';



const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/https://github.com/abdulrfarag/search-movie-gp3.git">Portfolio</a>
    </nav>
  );
}

export default Navbar;
