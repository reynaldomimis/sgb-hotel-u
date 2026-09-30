import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import soto from "../../images/baguio.jpg";
import "./cnavbar.scss";
import { MenuItems } from "../../contexts/MenuItems";
import { Link } from "react-router-dom";

const CNavbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="cn-nav"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={soto}
              className="soto"
              alt="Soto Grande Baguio Hotel"
              width="70%"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="cn-toogle"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="cn-collapse"
          >
            <Nav className="me-auto">
              {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path} className="list" key={item.path}>
                    {item.icon}
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CNavbar;
