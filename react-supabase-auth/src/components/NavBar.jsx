import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>APPRENTICE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {!auth && (
              <Nav.Link as={Link} to="/ceo">
                For CEOs
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/students">
                For Students
              </Nav.Link>
            )}
            {!auth && (
              <NavDropdown title="Resources" id="resources-dropdown">
                <NavDropdown.Item as={Link} to="/blog">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/webinar">
                  Webinar Series
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
            )}
       
            {auth && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {auth && (
              <Nav.Link as={Button} onClick={handleLogout}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
