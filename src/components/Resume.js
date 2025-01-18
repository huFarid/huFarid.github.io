import React, { Component } from 'react';
import '../css/Resume.css'; 

class Resume extends Component {
  render() {
    // Add console.log to debug the incoming data
    console.log("Resume props:", this.props.data);

    if (!this.props.data) {
      return <div>Loading resume data...</div>;
    }

    const { education, work, skills } = this.props.data;

    // Adding chekcs for each section
    const educationList = education?.map(education => (
      <div key={education.school}> 
        <h1>{education.school}</h1>
        <p>{education.degree}</p>
        <p>{education.graduated}</p>
        <p>{education.description}</p>
      </div>
    ));

    const workList = work?.map(work => (
      <div key={work.company}>
        <h1>{work.company}</h1>
        <p>{work.title}</p>
        <p>{work.years}</p>
        <p>{work.description}</p>
      </div>
    ));

    const skillsList = skills?.map(skill => {
      // Removing the '%' to convert the level to number
      const levelValue = parseInt(skill.level.replace('%', ''));
      
      return (
        <div key={skill.name} className="skill-item">
          <h1>{skill.name}</h1>
          <div className="skill-bar">
            <div 
              className="skill-level"
              style={{
                width: `${levelValue}%`,
                backgroundColor: `rgba(46, 204, 113, ${levelValue/100})`
              }}
            ></div>
          </div>
        </div>
      );
    });

    return (
      <section id='Resume'>
        <div className='row Education'>
          <div className='three columns'>
            <h1>Education</h1>
          </div>
          <div className='nine columns'>
            {educationList}
          </div>
        </div>

        <div className='row Work'>
          <div className='three columns'>
            <h1>Work</h1>
          </div>
          <div className='nine columns'>
            {workList}
          </div>
        </div>

        <div className='row Skills'>
          <div className='three columns'>
            <h1>Skills</h1>
          </div>
          <div className='nine columns'>
            {skillsList}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
