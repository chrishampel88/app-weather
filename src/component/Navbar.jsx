import {Navbar, Nav, Container} from "react-bootstrap";
import style from '../styles/Navbar.module.css';
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavBar(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container className={style.navContainer}>
            <Navbar.Brand className={style.navTitle}>My Weather App</Navbar.Brand>
            <Nav className={style.meAuto}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Me">About me</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>      
      </>   
        )
    }
