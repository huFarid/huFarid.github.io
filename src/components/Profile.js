import React, { Component } from 'react';
import HosseinImgUrl from '../assets/images/Hossein.jpg';

class Profile extends Component {


  render() {
    const {data} = this.props;

    
    return (
      <div className='profile-container'>

        <div className='three columns'>
          <img
            src={HosseinImgUrl}
            alt="My profile"
            className="profile-picture"

          />

        </div>

        <div>
          <div>

            <h1>About Me</h1>
            <p>{this.props.data.bio}</p>

          </div>
          <br></br>
          <div className='address'>
            <h1>Contact Details</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            
            <p>{data.address.street}, {data.address.zip}, {data.address.city} </p>
            
            <p>{data.address.state}, {data.address.country}</p>
            <p></p>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
