import React from 'react';
import Hossein from '../assets/images/Hossein.jpg';

function Profile() {
  return (
    <div>
      <img
        src={Hossein}
        alt="My profile"
        className="profile-picture"
      />
    </div>
  );
}

export default Profile;
