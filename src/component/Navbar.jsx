import {Navbar, Nav, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>My Weather app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Me">About my</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar>      
      </>   
        )
    }
