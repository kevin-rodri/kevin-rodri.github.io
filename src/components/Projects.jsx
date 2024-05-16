import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import projects from '../services/projectServices';

function Projects() {
  return (
    <div className="text-center" style={{ margin: "20px" }}>
      <div id="projects" className="projects">
        <h2>Programming Projects</h2>
        <p className="descri">Below, you'll find a compilation of projects I've undertaken throughout my programming journey. Click on each project to be redirected to its respective GitHub Repository.</p>
      </div>
      
      <Container>
        <Row className="g-0 text-center">
          {projects.map((project, index) => (
            <Col key={index}>
              <div className="card">
                <Image src={project.image} className="card-img-top mx-auto" style={{ margin: "10px" }} alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.sourceCodeLink} style={{ color: "black", marginBottom: "10px" }} className="button-56" id="btn-boot">Go to Source Code</a>
                  {project.demoLink && <a href={project.demoLink} style={{ color: "black" }} className="button-56" id="btn-boot">Go to Demo</a>}
                  {project.documentationLink && <a href={project.documentationLink} style={{ color: "black" }} className="button-56" id="btn-boot">Go to Documentation</a>}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
