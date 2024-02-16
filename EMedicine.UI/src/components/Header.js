//import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import Dashboard from "../components/users/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "../components/users/Orders";
function Header({ user }) {
	//const [user, setUser] = useState(" ");
	//console.log(user);
	return (
		<div className='Links'>
			<Navbar bg='dark' expand='lg'>
				<Navbar.Brand>EMedicine</Navbar.Brand>

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto' bg='dark'>
						<Nav.Link href='/dashboard'>Dashboard</Nav.Link>
						<Nav.Link href='/myorders'>Orders</Nav.Link>
						<Nav.Link href='/profile'>Profile</Nav.Link>
						<Nav.Link href='/products'>Medicines</Nav.Link>
						<Nav.Link href='/cart'>Cart</Nav.Link>
						<Nav.Link href='/profile'>Welcome User</Nav.Link>
						<Nav.Link href='/'>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
