import React from "react";
import Header from "../Header";
import { useProperties } from "../PropertyProvider";
export default function Dashboard({ user }) {
	//console.log(user);
	const { properties } = useProperties();
	var currentprop = JSON.stringify(properties);
	console.log(currentprop);
	console.log(properties.user.user);
	return (
		<>
			<Header />
			<h1>Dashboard</h1>
			<p>Properties: {JSON.stringify(properties)}</p>
		</>
	);
}
