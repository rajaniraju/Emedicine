import React from "react";
import AdminHeader from "./AdminHeader";
import { useProperties } from "../PropertyProvider";
export default function Admindashboard(props) {
	const { properties } = useProperties();
	var currentprop = JSON.stringify(properties);
	console.log(currentprop);
	console.log(properties.user.user);
	return (
		<>
			<AdminHeader />
			<h1>Dashboard</h1>
			<p>Properties: {JSON.stringify(properties)}</p>
		</>
	);
}
