import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import projectZ from '../photos/project-z.png';
import stockMarket from "../photos/StockMarketMastery.png"
import graph from '../photos/graph.png';
import { Link } from "react-router-dom";
function Projects() {
  return (
    <div className="text-center" style={{ margin: "20px" }}>
  <div id="projects" className="projects">
    <h2 >Programming Projects</h2>
    <p className="descri">Here I will include a list of projects that I have been working out throughout my programming career. Feel free to click on the project to be redircted to their proper Github Repository.</p>
  </div>
  
  <Container>
    <Row className="g-0 text-center">
    <Col >
        <div className="card">
        <Image src={stockMarket}  className="card-img-top mx-auto" alt="Stock-Market-Mastery" />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>Stock-Market-Mastery</h5>
            <p className="card-text">
            An Android application that allows users to learn more about stocks. The user can search through thousands of stock companies and retain more information about a company's stock. If they're convinced, the user can purchase that company's stock or continue to look for other stocks. Once a stock is bought, the user can sell it in return for some profit based on how much they're willing to sell. This project was worked on alongside Harsh Gandhi, a Computer Science and Data Science undergraduate at Quinnipiac. 
            </p>
            <a href= "https://github.com/GandhiHarsh2003/Stock-Market-Mastery" className="btn btn-primary btn-spacing" id='btn-boot'>Go to Source Code</a>
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
            <a href="https://github.com/kevin-rodri/ZombieLand" className="btn btn-primary btn-spacing" id='btn-boot'>Go to Source Code</a>
            <a href="https://a-r-t.github.io/SER225-Project-Website/semesters/fall2022/teams/project-z"  id='btn-boot' className="btn btn-primary btn-spacing">Go to Documentation</a>

          </div>
        </div>
      </Col>
      <Col>
        <div className="card">
        <Image src={graph}  className="card-img-top mx-auto" style={{ margin: "10px" }} alt="Graphing-And-Grading-System"/>
          <div className="card-body">
            <h5 className="card-title">Graphing-And-Grading-System</h5>
            <p className="card-text">A program teachers would be able to use to keep track of their student's test average. The program is vital for teachers to identify students who are doing well in the class and who are struggling. Two data structures were designed and implemented from scratch: ArrayList and queues. The jmathio.jar and jmathplot.jar libraries were also used (feel free to browse through the repository for the jar file right<a href = "https://github.com/yannrichet/jmathplot" target = "_blank" title = "really cool repo :0"> here!</a>)to read in the input data and present the graph according to the data. Additional components would enable teachers to print multiple students' averages on one graph and see how the overall class performs on the tests. The program was designed and implemented by me and Harsh Gandhi, a computer Science and Data Science Undergrad at Quinnipiac University. </p>
            <a href="https://github.com/kevin-rodri/CSC111-Final-Project"  id='btn-boot' className="btn btn-primary btn-spacing">Go to Source Code</a>
            </div>
            </div>
          </Col>
          </Row>
          </Container>
          </div>
          );
}

export default Projects;