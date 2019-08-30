import React, { Component } from 'react';
import Me from './Me';
import Menu from './Menu';

class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <div className="text-center sticky-left">
        <Me resumeData={resumeData}/>
        <Menu resumeData={resumeData}/>
        <p className="mt-5 mb-2">Copyright By Ahmas</p>
      </div>
    )
  };
}

export default Header;
