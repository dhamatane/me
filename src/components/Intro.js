import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';

class Intro extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let socialLinks = resumeData.socialLinks;
    return(
      <div className="container mt-5 intro" id="intro">
        <div className="text-center">
          <h1>I am {resumeData.name}</h1>
          <p className="lead">
            {resumeData.roleDescription}
          </p>
          <hr className="separetor"></hr>
          <a href="#" className="mr-4"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default Intro;
