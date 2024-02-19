import React from "react";
import AdminHeader from "./AdminHeader";
import { useEffect, useState } from "react";

import Table from "@mui/joy/Table";
import { Modal, Stack } from "react-bootstrap";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import axios from "axios";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/joy/Box";

export default function Medicine(props) {
	const [show, setShow] = useState("false");
	const [medicineObject, setMedicineObject] = useState({
		Name: "",
		Manufacturer: "",
		UnitPrice: 0,
		Discount: 0,
		Quantity: 0,
		ExpDate: "2/18/2024",
		ImageUrl: "",
		Status: 0,
	});
	const handleOpen = () => {
		setShow(true);
	};
	const handleCloseModal = () => {
		setShow(false);
	};
	//Can also do handle change for each feild seperately. that is too much verbose.So we extract the 'name' and 'value' from the input field  using event.target and destrucure the object and computed property names to update the corresponding property in the PersonObject state.
	const handleChange = (event) => {
		const { name, value } = event.target;
		setMedicineObject({ ...medicineObject, [name]: value });
	};
	const handleSubmit = async () => {
		//console.log(medicineObject.ExpDate);
		var inputdateString = medicineObject.ExpDate;
		const [month, day, year] = inputdateString.split("/");
		const dateObject = new Date(`${year}-${month}-${day}`);
		var isoDateString = dateObject.toISOString();

		const data = {
			name: medicineObject.Name,
			manufacturer: medicineObject.Manufacturer,
			unitPrice: medicineObject.UnitPrice,
			discount: medicineObject.Discount,
			quantity: medicineObject.Quantity,
			expDate: isoDateString,
			imageUrl: medicineObject.ImageUrl,
			status: medicineObject.Status,
		};

		console.log(data.status);
		const url = "https://localhost:7148/api/Admin/addUpdateMedicine";
		console.log(data);
		try {
			const response = await axios.post(url, data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
		// To close the Modal after saving changes.
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
						<th>Quantity</th>
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
								<th>Name</th>
								<th>Manufacturer</th>
								<th>UnitPrice</th>
								<th>Discount</th>
								<th>Quantity</th>
								<th>ExpDate</th>
								<th>ImageUrl</th>
								<th>status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div>
										<Input
											name='Name'
											type='text'
											placeholder='Name'
											value={medicineObject.Name}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='Manufacturer'
											type='text'
											placeholder='Manufacturer'
											value={medicineObject.Manufacturer}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='UnitPrice'
											type='text'
											placeholder='UnitPrice'
											value={medicineObject.UnitPrice}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='Discount'
											type='text'
											placeholder='Discount'
											value={medicineObject.Discount}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='Quantity'
											type='text'
											placeholder='Quantity'
											value={medicineObject.Quantity}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='ExpDate'
											type='text'
											placeholder='ExpDate'
											value={medicineObject.ExpDate}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='ImageUrl'
											type='text'
											placeholder='ImageUrl'
											value={medicineObject.ImageUrl}
											onChange={handleChange}
										/>
									</div>
								</td>
								<td>
									<div>
										<Input
											name='Status'
											type='text'
											placeholder='Status'
											value={medicineObject.Status}
											onChange={handleChange}
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
					<ButtonGroup aria-label='outlined primary button group'>
						<Button onClick={handleCloseModal}>Close</Button>

						<Button onClick={handleSubmit}>Save Changes</Button>
					</ButtonGroup>
				</Modal>
			</div>
		</>
	);
}
