import React, { Component } from 'react';
// import Skill from './Skill';

class About extends Component {
  render() {
    return(
      <div className="container" id="skills">
        <div className="mt-5">
          <h2 className="text-center">My skills</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Languages</h3>
            <div className="skill p-2 rounded">
              <h4>HTML</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                  95%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>CSS</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  90%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>Javascript</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  50%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>PHP</h4>
            
              <div className="progress">
                <div className="progress-bar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                  65%
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <h3 className="text-center">Frameworks</h3>
            <div className="skill p-2 rounded">
              <h4>Bootstrap</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  85%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>ReactJs</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                  10%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>Laravel</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                  30%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6">
            <h3 className="text-center">Databases</h3>
            <div className="skill p-2 mt-3 rounded">
              <h4>Mysql</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                  55%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>Eloquent</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                  15%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>Doctrine</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                  30%
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <h3 className="text-center">Tools</h3>
            
            <div className="skill p-2 mt-3 rounded">
              <h4>Git/Github</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                  30%
                </div>
              </div>
            </div>

            <div className="skill p-2 mt-3 rounded">
              <h4>Vs Code</h4>

              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default About;