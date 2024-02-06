import React, { useState } from "react";
import "./Header.css";

function Header(props) {
	//[user, setUser] = useState(" ");

	return (
		<ul>
			<li>
				<a href='/dashboard'>Dashboard</a>
			</li>
			<li>
				<a href='/myorders'>Orders</a>
			</li>
			<li>
				<a href='/profile'>Profile</a>
			</li>
			<li>
				<a href='/cart'>Cart</a>
			</li>
			<li>
				<a href='/products'>Medicines</a>
			</li>
			<li className='rightlist'>
				<a href='/profile'>Logout</a>
			</li>

			<li className='rightlist'>
				<a href='/profile'>Welcome {}</a>
			</li>
		</ul>
	);
}

export default Header;
