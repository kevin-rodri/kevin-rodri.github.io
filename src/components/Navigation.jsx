import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Switch from './Switch';
function Navigation() {

  return (
    <Navbar expand="lg" sticky="top" className='navBar'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" exact className={location.pathname === "/" ? "nav-link active" : "nav-link"}>My Website &#129312;</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" exact className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Nav.Link>
            <Nav.Link  as={Link} to="/about" exact className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" exact className={location.pathname === "/programming-projects" ? "nav-link active" : "nav-link"}>
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

