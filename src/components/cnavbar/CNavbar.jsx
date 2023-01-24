import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import soto from "../../images/baguio.jpg";
import "./cnavbar.scss";
import { MenuItems } from "../../contexts/MenuItems";

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
          <Navbar.Brand href="/">
            <img src={soto} className="soto" alt="" width="70%" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="cn-toogle"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ paddingLeft: 15, paddingTop: 10, paddingBottom: 15 }}
          >
            <Nav className="me-auto">
              {MenuItems.map((item, i) => {
                return (
                  <Nav.Link href={item.path} className="list">
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
