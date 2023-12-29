import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Switch from './Switch';
import WordRotation from './Words';
import { Link } from "react-router-dom";
function Home() {

  return (
    <Container className="nameContainer" id = "home">
      <Row className="justify-content-center"> 
        <Col className="text-center"> 
          <div className="fullName">
            <h1>Hey, I'm Kevin!</h1>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center"> 
        <Col className="text-center">
          <div className="underName">
            <div className="beforeChangingWord">
              <p>Aspiring Software Engineer Ready to</p>
            </div>
            <WordRotation/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
