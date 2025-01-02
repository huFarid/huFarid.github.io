import React from 'react';
import Profile from './Profile';
import SocialLinks from './SocialLinks';

function Main() {
  return (
    <main className="main-section">
      <h1 color='white'>Welcome to My Resume</h1>
      <p color='white'>This is my awesome website!</p>
      <Profile />
      <SocialLinks />
    </main>
  );
}

export default Main;
