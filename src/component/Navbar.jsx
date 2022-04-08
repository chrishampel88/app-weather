import {Navbar, Nav, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Navbar.css'

export default function NavBar(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container className="nav-container">
          <Navbar.Brand className="nav-title">My Weather App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Me">About me</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar>      
      </>   
        )
    }
