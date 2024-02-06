import React from "react";
import Header from "../Header";

export default function Dashboard(props) {
    console.log(props)
	return (
		<>
			<Header name={props} />
			<h1>Dashboard</h1>
		</>
	);
}
