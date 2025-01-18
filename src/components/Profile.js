import React, { Component } from 'react';
import HosseinImgUrl from '../assets/images/Hossein.jpg';


function Profile() {
  return (
    <div>
      <img
        src={HosseinImgUrl}
        alt="My profile"
        className="profile-picture"
      />
    </div>
  );
}

export default Profile;
