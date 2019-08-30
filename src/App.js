import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Intro from './components/Intro';
import About from './components/About';
import resumeData from './resumeData';
// import { Row, Col } from 'react-bootstrap';
// import { Layout, Header, Navigation, Drawer } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar">
            <SideBar resumeData={resumeData}/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main pb-5">
            <Intro resumeData={resumeData}/>
            <About resumeData={resumeData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
