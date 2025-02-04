import React, { Component } from 'react';
import Profile from './Profile';
import SocialLinks from './SocialLinks';
import '../css/Main.css'



class Main extends Component {

  render() {

    return (
      <main className="main-section">

        <Profile data={this.props.data} />

      </main>

    )
  }

}

export default Main;
