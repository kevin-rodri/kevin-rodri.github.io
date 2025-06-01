import { Container, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import projectZ from '../photos/project-z.png';
import stockMarket from "../photos/StockMarketMastery.png"
import hiredAI from "../photos/hiredaipicture.png"
import ehrApplication from "../photos/ehr-application.png"

function Projects() {
  return (
    <div className="text-center" style={{ margin: "20px" }}>
      <div id="projects" className="projects">
        <h2 >Programming Projects</h2>
        <p className="descri">Below, you'll find a compilation of projects I've undertaken throughout my programming journey. Click on each project to be redirected to its respective GitHub Repository.</p>
      </div>

      <Container>
        <Row className="g-0 text-center">
          <Col>
            <div className="card">
              <Image src={ehrApplication} className="card-img-top mx-auto" style={{ margin: "10px" }} alt="EHR-Application" />
              <div className="card-body">
                <h5 className="card-title">Hir</h5>
                <p className="card-text">Developed a Chrome extension leveraging HTML, CSS, and JavaScript to dynamically generate tailored cover letters and resume by intelligently analyzing user experience against job description. Integrated multiple APIs for precise job data extraction, resume parsing, and utilized GPT-3.5 API to craft individualized cover letters, resulting in a 30% efficacy boost and an exceptional 100%-time savings. Collaborated with a team of three ensuring seamless task delegation and fostering intercommunication. </p>
                <a href="https://quinnipiac.zoom.us/rec/play/8fCJDOZVR4TvfMK9hkwmhkY6zVeMMrehuGQNQQy7AZF32GsjbnHQtlbnGnQ6GISmF03Bk8codnTsWjj2.zLzxj6324_tmeGIC?autoplay=true&startTime=1744406088000" style={{ color: "black", marginBottom: "10px" }} className="button-56" id="btn-boot">
                  Go to Demo
                </a>
                <a href="https://www.qu.edu/schools/engineering/our-work-and-research/projects-day/#softwareengineering" style={{ color: "black" }} className="button-56" id="btn-boot">
                  Go to Documentation
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card">
              <Image src={hiredAI} className="card-img-top mx-auto" style={{ margin: "10px" }} alt="Hired AI" />
              <div className="card-body">
                <h5 className="card-title">Hired AI</h5>
                <p className="card-text">Developed a Chrome extension leveraging HTML, CSS, and JavaScript to dynamically generate tailored cover letters and resume by intelligently analyzing user experience against job description. Integrated multiple APIs for precise job data extraction, resume parsing, and utilized GPT-3.5 API to craft individualized cover letters, resulting in a 30% efficacy boost and an exceptional 100%-time savings. Collaborated with a team of three ensuring seamless task delegation and fostering intercommunication. </p>
                <a href="https://github.com/GandhiHarsh2003/CoverLetterGenerator" style={{ color: "black", marginBottom: "10px" }} className="button-56" id="btn-boot">
                  Go to Source Code
                </a>
                <a href="https://gandhiharsh2003.github.io/Images/hiredai.mp4" style={{ color: "black" }} className="button-56" id="btn-boot">
                  Go to Demo
                </a>
              </div>
            </div>
          </Col>
          <Col >
            <div className="card">
              <Image src={stockMarket} className="card-img-top mx-auto" alt="Stock-Market-Mastery" />
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>Stock-Market-Mastery</h5>
                <p className="card-text">
                  An Android application that allows users to learn more about stocks. The user can search through thousands of stock companies and retain more information about a company's stock. If they're convinced, the user can purchase that company's stock or continue to look for other stocks. Once a stock is bought, the user can sell it in return for some profit based on how much they're willing to sell. This project was worked on alongside Harsh Gandhi, a Computer Science and Data Science undergraduate at Quinnipiac.
                </p>
                <a href="https://github.com/GandhiHarsh2003/Stock-Market-Mastery" style={{ color: "black" }} className="button-56" id="btn-boot">
                  Go to Source Code
                </a>

              </div>
            </div>
          </Col>
          <Col>
            <div className="card">
              <Image src={projectZ} className="card-img-top mx-auto" style={{ margin: "10px" }} alt="Project Z" />
              <div className="card-body">
                <h5 className="card-title">Project Z</h5>
                <p className="card-text">
                  I worked on an open-source RPG game designed for Quinnipiac's SER 225 Course. As part of this semester-long project, my peers and I collaborated in numerous scrum sprints to develop and enhance an RPG game written in Java. I collaborated with the scrum master on several reports detailing program reviews, customer requirements, and prioritized bugs & enhancements. I, Harsh Gandhi, Aaryan Kapoor, Matthew Nova, and Brian Wanamaker created this game, all of which are Quinnipiac Computer Science and Software Engineering undergrads.
                </p>
                <a href="https://github.com/kevin-rodri/ZombieLand" className="button-56" style={{ color: "black", marginBottom: "10px" }} id="btn-boot">
                  Go to Source Code
                </a>
                <a href="https://a-r-t.github.io/SER225-Project-Website/semesters/fall2022/teams/project-z" style={{ color: "black" }} className="button-56" id="btn-boot">
                  Go to Documentation
                </a>


              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Projects;

