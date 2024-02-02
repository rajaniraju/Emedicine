import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";

import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";

import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Avatar from "@mui/joy/Avatar";
function Header() {
	const [index, setIndex] = React.useState(0);
	return (
		<Box
			sx={{
				flexGrow: 1,
				m: -2,
				overflowX: "hidden",
			}}>
			<Tabs
				aria-label='Pipeline'
				value={index}
				onChange={(event, value) => setIndex(value)}>
				<TabList
					sx={{
						pt: 1,
						justifyContent: "center",
						[`&& .${tabClasses.root}`]: {
							flex: "initial",
							bgcolor: "transparent",
							"&:hover": {
								bgcolor: "transparent",
							},
							[`&.${tabClasses.selected}`]: {
								color: "primary.plainColor",
								"&::after": {
									height: 2,
									borderTopLeftRadius: 3,
									borderTopRightRadius: 3,
									bgcolor: "primary.500",
								},
							},
						},
					}}>
					<Tab>EMedicine</Tab>

					<Tab indicatorInset></Tab>
					<Tab indicatorInset>
						Deals{" "}
						<Chip
							size='sm'
							variant='soft'
							color={index === 0 ? "primary" : "neutral"}></Chip>
					</Tab>
					<Tab indicatorInset size='lg'>
						Library{" "}
						<Chip
							variant='soft'
							color={index === 1 ? "primary" : "neutral"}></Chip>
					</Tab>
					<Tab indicatorInset>
						Products{" "}
						<Chip
							size='sm'
							variant='soft'
							color={index === 2 ? "primary" : "neutral"}>
							8
						</Chip>
					</Tab>
				</TabList>
				<Box
					sx={(theme) => ({
						"--bg": theme.vars.palette.background.surface,
						background: "var(--bg)",
						boxShadow: "0 0 0 100vmax var(--bg)",
						clipPath: "inset(0 -100vmax)",
					})}>
					<TabPanel value={0}>Deals</TabPanel>
					<TabPanel value={1}>Library</TabPanel>
					<TabPanel value={2}>Products</TabPanel>
				</Box>
			</Tabs>
		</Box>
	);
}

export default Header;
