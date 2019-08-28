import React, { Component } from 'react';

class Me extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let email = resumeData.contact.find(contact => contact.email);
    let phone = resumeData.contact.find(contact => contact.phone);
    return (
      <div className="author">
        <img className="card-img-top rounded-circle w-75 mt-5" src={resumeData.imageSrc} alt="Author" />
        <h1 className="mt-3">{resumeData.name}</h1>
        <h5 className="font-weight-normal mt-5">
          <i className={email.className}></i> {email.email}
        </h5>
        <h5 className="font-weight-normal mt-3 mb-5">
          <i className={phone.className}></i> {phone.phone}
        </h5>
      </div>
    )
  };
}

export default Me;