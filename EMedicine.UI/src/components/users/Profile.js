import React from "react";
import Header from "../Header";
import { useProperties } from "../PropertyProvider";
export default function Profile({ user }) {
	const { properties } = useProperties();
	var currentprop = JSON.stringify(properties);
	console.log(currentprop);
	console.log(properties);

	return (
		<>
			<Header />
			<div>Profile</div>
			<p>Properties: {JSON.stringify(properties)}</p>
		</>
	);
}
