import React from "react";
import "../Header.css";
export default function AdminHeader(props) {
	return (
		<ul>
			<li>
				<a href='/admindashboard'>Dashboard</a>
			</li>
			<li>
				<a href='/adminorders'>All Orders</a>
			</li>

			<li>
				<a href='/customers'>CustomerList</a>
			</li>
			<li>
				<a href='/medicine'>Medicines</a>
			</li>
			<li className='rightlist'>
				<a href='/'>Logout</a>
			</li>
			<li className='rightlist'>
				<a href='/profile'>{props.name.user}</a>
			</li>
			<li className='rightlist'>
				<a href='/profile'> Welcome Admin </a>
			</li>
		</ul>
	);
}
