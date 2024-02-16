import React from "react";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import "../Header.css";
export default function AdminHeader(props) {
	return (
		<div className='Links'>
			<Navbar bg='dark' expand='lg'>
				<Navbar.Brand>EMedicine</Navbar.Brand>

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto' bg='dark'>
						<Nav.Link href='/admindashboard'>Admin Dashboard</Nav.Link>
						<Nav.Link href='/adminorders'>Orders</Nav.Link>
						<Nav.Link href='/medicine'>Medicines</Nav.Link>
						<Nav.Link href='/customers'>Customer List</Nav.Link>
						<Nav.Link href='/'>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
