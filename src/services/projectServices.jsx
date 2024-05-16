import projectZImage from '../photos/project-z.png';
import stockMarketImage from "../photos/StockMarketMastery.png";
import hiredAIImage from "../photos/hiredaipicture.png";
import openLabImage from "../photos/openlab.png";

const projects = [
  {
    title: "Hired AI",
    image: hiredAIImage,
    description: "Developed a Chrome extension leveraging HTML, CSS, and JavaScript to dynamically generate tailored cover letters and resume by intelligently analyzing user experience against job description. Integrated multiple APIs for precise job data extraction, resume parsing, and utilized GPT-3.5 API to craft individualized cover letters, resulting in a 30% efficacy boost and an exceptional 100%-time savings. Collaborated with a team of three ensuring seamless task delegation and fostering intercommunication.",
    sourceCodeLink: "https://github.com/GandhiHarsh2003/CoverLetterGenerator",
    demoLink: "https://gandhiharsh2003.github.io/Images/hiredai.mp4"
  },
  {
    title: "Stock-Market-Mastery",
    image: stockMarketImage,
    description: "An Android application that allows users to learn more about stocks. The user can search through thousands of stock companies and retain more information about a company's stock. If they're convinced, the user can purchase that company's stock or continue to look for other stocks. Once a stock is bought, the user can sell it in return for some profit based on how much they're willing to sell. This project was worked on alongside Harsh Gandhi, a Computer Science and Data Science undergraduate at Quinnipiac.",
    sourceCodeLink: "https://github.com/GandhiHarsh2003/Stock-Market-Mastery"
  },
  {
    title: "Project Z",
    image: projectZImage,
    description: "I worked on an open-source RPG game designed for Quinnipiac's SER 225 Course. As part of this semester-long project, my peers and I collaborated in numerous scrum sprints to develop and enhance an RPG game written in Java. I collaborated with the scrum master on several reports detailing program reviews, customer requirements, and prioritized bugs & enhancements. I, Harsh Gandhi, Aaryan Kapoor, Matthew Nova, and Brian Wanamaker created this game, all of which are Quinnipiac Computer Science and Software Engineering undergrads.",
    sourceCodeLink: "https://github.com/kevin-rodri/ZombieLand",
    documentationLink: "https://a-r-t.github.io/SER225-Project-Website/semesters/fall2022/teams/project-z"
  }, 
  {
    title: "OpenLab Scheduling Application",
    image: openLabImage,
    description: "I developed an OpenLab Scheduling application tailored for Quinnipiac University's School of Nursing. This project spanned throughout the school year, during which I collaborated with peers and faculty members to create a user-friendly platform for managing lab sessions. Using agile methodologies and numerous scrum sprints, we designed and implemented features enabling students to register for open and make-up lab sessions. Professors can dynamically add or delete labs and track student attendance efficiently. My role involved close collaboration with stakeholders to gather requirements, develop and test features, and ensure the platform met the unique needs of nursing students and faculty.",
    sourceCodeLink: "https://github.com/AaryanKapoor22/OpenLab", 
    documentationLink: "https://open-lab-scheduling.vercel.app"
  }
];

export default projects;
