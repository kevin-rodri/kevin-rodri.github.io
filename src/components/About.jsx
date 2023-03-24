import React from 'react';
import Photo from './Photo';
import { Link } from "react-router-dom";

function About() {
  return (
      <div id="about" className="about" >
      <div id="about-kev" className="kevin">
        <h2 id="about-heading">About Me</h2>
        <p>
        Thank you for visiting my site! This site is meant to showcase all the programming projects I've worked on throughout my career. To see the projects I've worked on, navigate to the <strong>Programming Projects</strong> part of this site!
        </p>
        <p>
        My name is Kevin Rodriguez, and I am a second-year student at <a href='https://www.qu.edu'>Quinnipiac University</a>. Currently, I am pursuing a bachelor's degree in Software Engineering. Before Quinnipiac, I attended the Engineering and Science University Magnet School (ESUMS). While at ESUMS, I developed an interest in web and mobile development, leading to my first Python programming course. Learning how to program "Hello World" and learning programming fundamentals led to me wanting to pursue a degree in Software Engineering. That is when I decided to commit to Quinnipiac University, where I met phenomenal friends and professors who have been a significant help throughout my academic journey.
        </p>
        <p>
        I was born and raised in New Haven, Connecticut (Man, I've spent my entire life in Connecticut). Whenever I'm not in school, at work, or sitting at my desk writing code, I like to walk around the city and learn more about places in town (If you ever need any recommendations, let me know!). In addition to that, I enjoy going for runs and exercising before starting my day with schoolwork. 
        </p>
        <p>
        Do I sound very "fun" to you? Well, good; I'm glad we are on the same page! 😃 
        </p>
      </div>
    </div>
   
  );
}

export default About;