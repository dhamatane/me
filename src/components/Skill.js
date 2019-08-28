import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return(
      <div className="skill rounded">
        <h4>HTML</h4>

        <div className="progress">
          <div className="progress-bar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            95%
          </div>
        </div>
      </div>
    )
  };
}

export default Skill;
