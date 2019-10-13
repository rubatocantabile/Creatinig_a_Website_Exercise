import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header id="header" className="header">
          <nav className="nav">
            <ul>
              <li className="menu1">menu 1</li>
              <li className="menu2">menu 2</li>
              <li className="menu3">menu 3</li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;