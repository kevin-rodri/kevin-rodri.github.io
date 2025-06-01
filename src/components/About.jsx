import React from 'react';
import Photo from './Photo';
import { Link } from "react-router-dom";

function About() {
  return (
      <div id="about" className="about" >
      <div id="about-kev" className="kevin">
        <h2 id="about-heading">About Me</h2>

      <p>
       Hey there! I'm Kevin Rodriguez, and I graduated with a bachelor's degree in software engineering from <a href="https://www.qu.edu">Quinnipiac University</a>.
        My journey in the world of code is a thrilling exploration of creativity and problem-solving.
      </p>
      <p>
      In my free time, I enjoy working on personal coding projects, trying new caffeinated beverages, 
      going for endless mile runs, spending quality time with family and friends,
      and staying up-to-date with the latest trends in technology.
      </p>

      </div>
    </div>
   
  );
}

export default About;