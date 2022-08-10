import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Actions/userActions";
function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  // console.log({msg:"user is here",user})
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>{
            user? <>
            <Nav.Link as={Link} to="/" onClick={() => dispatch(logout())}>log out
          </Nav.Link>
          <Nav.Link> Welcome {user?.name} !</Nav.Link>

            </> : <>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
            </>
          }
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
