import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="text-center content">
        <img className="card-img-top rounded-circle w-50 mt-5" src="images/ahmas2011.jpg" alt="Card cap" />
        <h1 className="mt-3">Hamatane Diallo</h1>
        <h5 className="font-weight-normal mt-5">
          <i className="fa fa-envelope-square"></i> dhamatane@gmail.com
        </h5>
        <h5 className="font-weight-normal mt-3 mb-5">
          <i className="fa fa-phone"></i> +225 49 262 943
        </h5>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#intro" className="">About</a>
          </li>

          <li className="nav-item mt-3">
            <a href="#skills" className="">My skills</a>
          </li>

          {/* <li className="nav-item mt-3">
            <a href="#contact" className="">Contact</a>
          </li> */}
        </ul>

        <p className="mt-5">Copyright By Ahmas</p>
      </div>
    )
  };
}

export default Header;
