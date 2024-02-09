import React from "react";
import { useState, useEffect, useRef } from "react";
import AdminHeader from "./AdminHeader";
import Table from "@mui/joy/Table";

export default function CustomerList(props) {
	const [customerList, setcustomerList] = useState([]);
	useEffect(() => {
		const url = "https://localhost:7148/api/Admin/userList";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setcustomerList(data.listUsers))
			.catch((error) => console.log(error));
	}, []);
	console.log(customerList);
	console.log(customerList[0]);
	//{
	//customerList.map((list, index) => {});
	//}

	return (
		<>
			<AdminHeader name={props} />
			<h2>CustomerList</h2>
			<Table
				aria-label='basic table'
				stripe='2n'
				sx={(theme) => ({
					"& tr > *:first-of-type": { bgcolor: "success.softBg" },
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
								<td key={index + 1}>{list.lastName}</td>
								<td key={index + 2}>{list.email}</td>
								<td key={index + 3}>{list.fund}</td>
								<td key={index + 4}>{list.type}</td>
								<td key={index + 5}>{list.status}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}
