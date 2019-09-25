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
      {projects.map(proj => {
        return <Project
          name={proj.name}
          photo={proj.photo}
          desc={proj.desc}
          tags={proj.tags}
          link={proj.link} />
      })}
      </div>
    </div>
  )
}

export default Work;
