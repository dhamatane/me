import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return(
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#intro" className="">About</a>
        </li>

        <li className="nav-item mt-3">
          <a href="#skills" className="">My skills</a>
        </li>
      </ul>
    )
  };
}

export default Menu;