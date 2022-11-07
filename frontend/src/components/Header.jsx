import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';


function Header(props) {
  let [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/shopping-cart/")
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.isChanged]);

  return (
    <div className="navb d-flex">
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            &nbsp;&nbsp; Pizzeria &nbsp;&nbsp;
            <img
              src="../assets/PizzeriaLogo.png"
              alt="logo"
              height={35}
              width={40}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        {/* <div> */}
        <Nav className="mr-auto">
          <LinkContainer to="/order-pizza">
            <Nav.Link>Order Pizza &nbsp;&nbsp;</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/build-pizza">
            <Nav.Link>Build Ur Pizza</Nav.Link>
          </LinkContainer>
        </Nav>
        {/* </div> */}
        <div className="cart-button">
          <LinkContainer to="/shopping-cart">
            <Nav.Link className="ml-auto">
              <button
                style={{ border: "black", color: "white" }}
                className="btn btn-warning"
              >
                🛒Order Online&nbsp;
                <Badge bg="danger">{cart.length}</Badge>
                {/* <span style={{color:"black", fontWeight:"bolder"}}>{cart.length}</span> */}
              </button>
            </Nav.Link>
          </LinkContainer>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
