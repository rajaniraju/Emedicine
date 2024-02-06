import React from "react";
import AdminHeader from "./AdminHeader";

export default function Admindashboard(props) {
	return (
		<>
			<AdminHeader name={props} />
			<h1>Dashboard</h1>
		</>
	);
}
