import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Switch from './Switch';
import { useEffect } from 'react';

function Navigation() {
  const location = useLocation();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className='navBar'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" exact className={location.pathname === "/" ? "nav-link active" : "nav-link"}>My Website &#129312;</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" exact className={location.pathname === "/" ? "nav-link active" : "nav-link"} onClick={handleClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" exact className={location.pathname === "/about" ? "nav-link active" : "nav-link"} onClick={handleClick}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" exact className={location.pathname === "/projects" ? "nav-link active" : "nav-link"} onClick={handleClick}>
              Programming Projects
            </Nav.Link>
            <div className='switch' style={{ margin: "10px" }}>
              <Switch/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
