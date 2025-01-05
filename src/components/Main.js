import React from 'react';
import Profile from './Profile';
import SocialLinks from './SocialLinks';

function Main() {
  return (
    <main className="main-section">
      <h1 color='white'>Hossein Younesian Farid</h1>
      <p color='white'>.NET Developer</p>
      <Profile />
      <SocialLinks />
    </main>
  );
}

export default Main;
