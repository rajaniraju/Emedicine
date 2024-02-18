import React from "react";
import AdminHeader from "./AdminHeader";
import Table from "@mui/joy/Table";
import { Modal, Stack } from "react-bootstrap";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/joy/Box";
import { useState } from "react";
export default function Medicine(props) {
	const [show, setShow] = useState("false");
	const handleOpen = () => {
		setShow(true);
	};
	const handleCloseModal = () => {
		setShow(false);
	};
	return (
		<>
			<AdminHeader name={props} />
			<h2>List of Medicine</h2>
			<Table
				aria-label='basic table'
				stripe='2n'
				sx={(theme) => ({
					'& th[scope="col"]': theme.variants.solid.neutral,
					"& td": theme.variants.soft.neutral,
				})}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Manufacturer</th>
						<th>UnitPrice</th>
						<th>Discount</th>
						<th>ExpDate</th>
						<th>ImageUrl</th>
						<th>status</th>
					</tr>
				</thead>
				<tbody></tbody>
			</Table>
			<div className='button'>
				<Button sx={{ sm: 1 /* margin top */ }} onClick={handleOpen}>
					AddMedicine
				</Button>
				<Modal className='modal' show={show} onHide={handleCloseModal}>
					<Modal.Header>
						<Modal.Title className='modal-title'>
							Add New Items
						</Modal.Title>
					</Modal.Header>
					<Table
						aria-label='basic table'
						stripe='2n'
						sx={(theme) => ({
							'& th[scope="col"]': theme.variants.solid.neutral,
							"& td": theme.variants.soft.neutral,
						})}>
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Manufacturer</th>
								<th>UnitPrice</th>
								<th>Discount</th>
								<th>ExpDate</th>
								<th>ImageUrl</th>
								<th>status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div>
										<input name='Id' />
									</div>
								</td>
								<td>
									<div>
										<input name='Name' />
									</div>
								</td>
								<td>
									<div>
										<input name='Manufacturer' />
									</div>
								</td>
								<td>
									<div>
										<input name='UnitPrice' />
									</div>
								</td>
								<td>
									<div>
										<input name='Discount' />
									</div>
								</td>
								<td>
									<div>
										<input name='ExpDate' />
									</div>
								</td>
								<td>
									<div>
										<input name='ImageUrl' />
									</div>
								</td>
								<td>
									<div>
										<input name='Status' />
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
					<ButtonGroup aria-label='outlined primary button group'>
						<Button onClick={handleCloseModal}>Close</Button>

						<Button onClick={handleCloseModal}>Save Changes</Button>
					</ButtonGroup>
				</Modal>
			</div>
		</>
	);
}
