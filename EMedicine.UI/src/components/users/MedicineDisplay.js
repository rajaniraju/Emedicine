import React from "react";
import Header from "../Header";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CardOverflow from "@mui/joy/CardOverflow";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import Card from "@mui/joy/Card";

export default function MedicineDisplay(props) {
	const [medicineList, setMedicineList] = useState([]);
	useEffect(() => {
		const url = "https://localhost:7148/api/Admin/medicineList";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setMedicineList(data.listMedicines))
			.catch((error) => console.log(error));
	}, []);
	console.log(medicineList);
	return (
		<>
			<Header name={props} />
			<h2>List Of Medicines Available</h2>
			<Box
				sx={{
					width: "100%",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
					gap: 3,
				}}>
				{medicineList.map((list, index) => {
					return (
						<Card
							sx={{
								maxWidth: "100%",
								boxShadow: "lg",
							}}>
							<AspectRatio sx={{ minWidth: 200 }}>
								<img
									src='https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286'
									srcSet='https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x'
									loading='lazy'
									alt=''
								/>
							</AspectRatio>

							<CardContent>
								<Typography level='body-xs'>
									{list.manufacturer}
								</Typography>
								<Link
									href='#product-card'
									fontWeight='md'
									color='neutral'
									textColor='text.primary'
									overlay>
									{list.name}
								</Link>

								<Typography
									level='title-lg'
									sx={{ mt: 1, fontWeight: "xl" }}
									endDecorator={
										<Chip
											component='span'
											size='sm'
											variant='soft'
											color='success'>
											Lowest price
										</Chip>
									}>
									{list.unitPrice} $
								</Typography>
								<Typography level='body-sm'>
									(Only <b>7</b> left in stock!)
								</Typography>
							</CardContent>
							<CardOverflow>
								<Button variant='solid' color='primary' size='lg'>
									Add to cart
								</Button>
							</CardOverflow>
						</Card>
					);
				})}
			</Box>
		</>
	);
}
