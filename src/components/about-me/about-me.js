import React from 'react';
import './about-me.css';
import biopic from '../../davidlavieri.png';

function About (props) {
  return (
    <div className="about-me-section" id="about-me">
    <div className="about-words">
      <h2 className="me">
      About me.
      </h2>
      <ul className="bio">
        <li>I recently moved to San Francisco to pursue a career in technology.</li>
        <li>For the last 4 years I have been working in thought leadership: researching,
        developing, and publishing points of view about technology and business strategy.</li>
        <li>I have been teaching myself front-end development for 6 months, and am looking to cut
        my teeth on some real-world projects.</li>
        <li>I work in HTML5, CSS, and React.js.</li>
        <li>I can create design elements in Adobe Illustrator.</li>
        <li>I love cats.</li>
      </ul>
    </div>
    </div>
  )
}

export default About;
