import React from "react";
import Header from "../Header";

export default function Cart(props) {
	console.log(props);
	return (
		<>
			<Header name={props} />
			<h1>Cart</h1>
		</>
	);
}
