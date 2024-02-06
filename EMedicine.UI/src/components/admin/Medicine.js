import React from "react";
import AdminHeader from "./AdminHeader";

export default function Medicine(props) {
	return (
		<>
			<AdminHeader name={props} />
			<div>Medicine</div>
		</>
	);
}
