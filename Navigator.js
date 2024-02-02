import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DarkMode from '../Pages/DarkMode';
// import { ReactComponent as Logo } from "./Mercerlogo.svg";
import './Navigator.css';

const Vamshi=()=>
{
	return (
		
			<Navbar  fixed id="navibar" expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="POST" id="basic-nav-dropdown">
              <NavDropdown.Item href="/PostCustomer">post customer details</NavDropdown.Item>
              <NavDropdown.Item href="/PostOrders">
                Post Orders details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GET" id="basic-nav-dropdown">
              <NavDropdown.Item href="/GetCustomers">GET customer details</NavDropdown.Item>
              <NavDropdown.Item href="/GetOrders">
              GET order details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
      <DarkMode></DarkMode>
      
    </Navbar>
	
	);
}
export default Vamshi;









// return (
// 	<div className ="navbar navbar-expand-lg navbar-light" style={{'background-color': '#F8FAFC'}}>
// 	<a class="navbar-brand" href="#">Home</a>
// 	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 	<span class="navbar-toggler-icon"></span>
// 	  </button>

// 	  <a class="navbar-brand" href="/Post">Post</a>
// 	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 	<span class="navbar-toggler-icon"></span>
// 	  </button>

	


// 	  <a class="navbar-brand" href="/GET">GET</a>
// 	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 	<span class="navbar-toggler-icon"></span>
// 	  </button>
// 	  </div>
// );