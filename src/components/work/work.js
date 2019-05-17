import React from 'react';
import './work.css';
import Project from './project.js';
import { projects } from './projects-array.js';

function Work (props) {
  return (
    <div className="work-container" id="work">
      <div className="work">
        <h2 className="work-title">Work.</h2>
      </div>
      <div className="project-container">
        <Project
          name={projects[0].name}
          photo={projects[0].photo}
          desc={projects[0].desc}
          tags={projects[0].tags} />
        <Project
        name={projects[1].name}
        photo={projects[1].photo}
        desc={projects[1].desc}
        tags={projects[1].tags}/>
      </div>
    </div>
  )
}

export default Work;
