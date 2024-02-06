import React from "react";
import Header from "../Header";

export default function Profile(props) {
	return (
		<>
			<Header name={props} />
			<div>Profile</div>
		</>
	);
}
