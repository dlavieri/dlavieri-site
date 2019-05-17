import React from 'react';

function Project (props) {
  return (
    <div className="project-card">
      <div className="proj-photo">
        <img src={props.photo} className="project-photo"/>
      </div>
      <div className="project-about">
        <div className="proj-name">
          {props.name}
        </div>
        <div className="proj-desc">
          {props.desc}
        </div>
        <div className="proj-tags">
          {props.tags.map(i => <div className="tag">{i}</div>)}
        </div>
      </div>

    </div>
  )
}

export default Project;
