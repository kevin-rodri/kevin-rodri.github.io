import projectZImage from '../photos/project-z.png';
import stockMarketImage from "../photos/StockMarketMastery.png";
import hiredAIImage from "../photos/hiredaipicture.png";
import openLabImage from "../photos/openlab.png";
import aiConnectImage from "../photos/aiconnect.png";
import ehrApplicationImage from "../photos/ehr-application.png";

const projects = [
  {
    title: "EHR-Application",
    image: ehrApplicationImage,
    description: "For my senior capstone project, I co-developed an Electronic Health Record (EHR) application for Quinnipiac's School of Nursing. The applicatio does not only offer real-time responsive updates and instructorsand administrators are unable to provide provider orders and lab results in real-time during a simulation. In addition, the application enables students, instructors, and administrators within Quinnipiac University's School of Nursing to manage real-time patient information during simulation labs. The application focuses on creating an environment for everyone within the School of Nursing to access and simulate real-life healthcare scenarios successfully. Nursing students and instructors can input patient information based on their simulation. Instructors and administrators will be able to build and update the patient information.   ",
    sourceCodeLink: "https://ehr-web-application.vercel.app/",
    demoLink: "https://quinnipiac.zoom.us/rec/play/8fCJDOZVR4TvfMK9hkwmhkY6zVeMMrehuGQNQQy7AZF32GsjbnHQtlbnGnQ6GISmF03Bk8codnTsWjj2.zLzxj6324_tmeGIC?autoplay=true&startTime=1744406088000",
  },
  {
    title: "AI Connect",
    image: aiConnectImage,
    description: "I co-developed an Android chat application using Kotlin that enables users to chat with an AI in 108 languages using speech and text inputs. The app integrates Amazon Polly and Google TTS for text-to-speech conversion, supporting 41 languages. The backend uses Amazon Web Services (AWS), with an AWS Lambda function as the interface between the frontend and Amazon Polly and an S3 bucket for storing generated audio files. Speech recognition is one of the many features added to support voice input in multiple languages. To reduce the need for repeated calls to the backend service, a LruCache for caching audio resulted in a 50% reduction in calls. Google's Gemini API generates conversations. I implemented Firebase for user authentication and MongoDB as our database backend to allow users to resume conversations.",
    sourceCodeLink: "https://github.com/Ajifolahan/AI_Dialogue_Assistant",
    demoLink: "https://momoreayinde.dev/Images/aiConnect.mp4"
  },
  {
    title: "OpenLab Scheduling Application",
    image: openLabImage,
    description: "I developed an OpenLab Scheduling application tailored for Quinnipiac University's School of Nursing. This project spanned throughout the school year, during which I collaborated with peers and faculty members to create a user-friendly platform for managing lab sessions. Using agile methodologies and numerous scrum sprints, we designed and implemented features enabling students to register for open and make-up lab sessions. Professors can dynamically add or delete labs and track student attendance efficiently. My role involved close collaboration with stakeholders to gather requirements, develop and test features, and ensure the platform met the unique needs of nursing students and faculty.",
    sourceCodeLink: "https://github.com/AaryanKapoor22/OpenLab",
    documentationLink: "https://open-lab-scheduling.vercel.app"
  },
  {
    title: "Hired AI",
    image: hiredAIImage,
    description: "Developed a Chrome extension leveraging HTML, CSS, and JavaScript to dynamically generate tailored cover letters and resume by intelligently analyzing user experience against job description. Integrated multiple APIs for precise job data extraction, resume parsing, and utilized GPT-3.5 API to craft individualized cover letters, resulting in a 30% efficacy boost and an exceptional 100%-time savings. Collaborated with a team of three ensuring seamless task delegation and fostering intercommunication.",
    sourceCodeLink: "https://github.com/GandhiHarsh2003/CoverLetterGenerator",
    demoLink: "https://gandhiharsh2003.github.io/Images/hiredai.mp4"
  },
  {
    title: "Project Z",
    image: projectZImage,
    description: "I worked on an open-source RPG game designed for Quinnipiac's SER 225 Course. As part of this semester-long project, my peers and I collaborated in numerous scrum sprints to develop and enhance an RPG game written in Java. I collaborated with the scrum master on several reports detailing program reviews, customer requirements, and prioritized bugs & enhancements. I, Harsh Gandhi, Aaryan Kapoor, Matthew Nova, and Brian Wanamaker created this game, all of which are Quinnipiac Computer Science and Software Engineering undergrads.",
    sourceCodeLink: "https://github.com/kevin-rodri/ZombieLand",
    documentationLink: "https://a-r-t.github.io/SER225-Project-Website/semesters/fall2022/teams/project-z"
  }
];

export default projects;