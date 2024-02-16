import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import Table from "@mui/joy/Table";

import Pagination from "../../components/Pagination";
export default function CustomerList(props) {
	const [customerList, setcustomerList] = useState([]);
	function getCustomers() {
		const url = "https://localhost:7148/api/Admin/userList";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setcustomerList(data.listUsers))
			.catch((error) => console.log(error));
		console.log(customerList);
		console.log(customerList[0]);
	}
	useEffect(() => {
		const url = "https://localhost:7148/api/Admin/userList";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setcustomerList(data.listUsers))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<AdminHeader name={props} />
			<h2>CustomerList</h2>
			<Table
				aria-label='basic table'
				stripe='2n'
				sx={(theme) => ({
					'& th[scope="col"]': theme.variants.solid.neutral,
					"& td": theme.variants.soft.neutral,
				})}>
				<thead>
					<tr>
						<th>First Name </th>
						<th>lastName</th>
						<th>Email</th>
						<th>Fund</th>
						<th>Type</th>
						<th>status</th>
					</tr>
				</thead>
				<tbody>
					{customerList.map((list, index) => {
						return (
							<tr>
								<td key={index}>{list.firstName}</td>
								<td key={index + Math.random()}>{list.lastName}</td>
								<td key={index + Math.random()}>{list.email}</td>
								<td key={index + Math.random()}>{list.fund}</td>
								<td key={index + Math.random()}>{list.type}</td>
								<td key={index + Math.random()}>{list.status}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<br></br>
			<div className='paginationContainer'>
				<Pagination getCustomers={getCustomers} />
			</div>
		</>
	);
}
