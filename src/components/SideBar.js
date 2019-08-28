import React, { Component } from 'react';
import Me from './Me';
import Menu from './Menu';

class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <div className="text-center content">
        <Me resumeData={resumeData}/>
        <Menu resumeData={resumeData}/>
        <p className="mt-5">Copyright By Ahmas</p>
      </div>
    )
  };
}

export default Header;
